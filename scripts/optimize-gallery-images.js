const fs = require("fs/promises");
const path = require("path");
const sharp = require("sharp");

const root = path.join(__dirname, "..");
const jobs = [
  {
    source: path.join(root, "assets", "source-images", "portfolio"),
    destination: path.join(root, "public", "portfolio-web"),
  },
  {
    source: path.join(root, "assets", "source-images", "hero"),
    destination: path.join(root, "public", "images", "hero-web"),
  },
];

async function listImages(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const filePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return listImages(filePath);
    }

    return /\.(jpe?g|png)$/i.test(entry.name) ? [filePath] : [];
  }));

  return nested.flat();
}

async function optimize(source, sourceDirectory, destinationDirectory) {
  const relativePath = path.relative(sourceDirectory, source);
  const outputPath = path.join(
    destinationDirectory,
    relativePath.replace(/\.(jpe?g|png)$/i, ".webp"),
  );

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await sharp(source)
    .rotate()
    .resize({ width: 2200, height: 2200, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82, effort: 4 })
    .toFile(outputPath);

  console.log(`${relativePath} -> ${path.relative(root, outputPath)}`);
}

async function runWithConcurrency(items, limit, callback) {
  const queue = [...items];
  const workers = Array.from({ length: limit }, async () => {
    while (queue.length > 0) {
      const item = queue.shift();
      await callback(item);
    }
  });

  await Promise.all(workers);
}

async function main() {
  for (const job of jobs) {
    const images = await listImages(job.source);
    await runWithConcurrency(images, 2, (image) =>
      optimize(image, job.source, job.destination),
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
