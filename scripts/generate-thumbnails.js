const { execFileSync } = require("child_process");
const { readdirSync, existsSync, mkdirSync, writeFileSync } = require("fs");
const { join, basename, extname } = require("path");

const root = join(__dirname, "..");
const videosDir = join(root, "public", "videos");
const thumbsDir = join(root, "public", "thumbnails");
const dataFile = join(root, "app", "components", "showreelData.ts");
const ffmpegPath = join("C:", "ffmpeg", "bin", "ffmpeg.exe");

if (!existsSync(videosDir)) {
  throw new Error(`Videos directory not found: ${videosDir}`);
}

if (!existsSync(ffmpegPath)) {
  throw new Error(`FFmpeg executable not found at ${ffmpegPath}. Please extract a Windows build to C:\ffmpeg and ensure ffmpeg.exe exists.`);
}

if (!existsSync(thumbsDir)) {
  mkdirSync(thumbsDir, { recursive: true });
}

const videoFiles = readdirSync(videosDir)
  .filter((file) => {
    const ext = extname(file).toLowerCase();
    return ext === ".mp4" || ext === ".mov";
  })
  .sort((a, b) => {
    const aId = parseInt(basename(a, extname(a)), 10);
    const bId = parseInt(basename(b, extname(b)), 10);
    if (!Number.isNaN(aId) && !Number.isNaN(bId)) {
      return aId - bId;
    }
    return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
  });

if (videoFiles.length === 0) {
  throw new Error("No MP4 or MOV files found in public/videos.");
}

const clips = videoFiles.map((file) => {
  const id = basename(file, extname(file));
  const thumbFile = `${id}.jpg`;
  const videoPath = join(videosDir, file);
  const thumbPath = join(thumbsDir, thumbFile);

  console.log(`Generating thumbnail for ${file} -> ${thumbFile}`);
  execFileSync(ffmpegPath, [
    "-y",
    "-ss",
    "00:00:02",
    "-i",
    videoPath,
    "-frames:v",
    "1",
    "-q:v",
    "2",
    thumbPath,
  ], { stdio: "inherit" });

  return {
    id,
    title: id.replace(/[-_]/g, " "),
    subtitle: "",
    description: "",
    src: `/videos/${file}`,
    poster: `/thumbnails/${thumbFile}`,
  };
});

const fileText = `export type ShowreelClip = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  src: string;
  poster: string;
};

export const showreelClips: ShowreelClip[] = [
${clips
  .map(
    (clip) =>
      `  {
    id: "${clip.id}",
    title: "${clip.title}",
    subtitle: "${clip.subtitle}",
    description: "${clip.description}",
    src: "${clip.src}",
    poster: "${clip.poster}",
  },`
  )
  .join("\n")}
];
`;

writeFileSync(dataFile, fileText, "utf8");
console.log(`Updated ${dataFile} with ${clips.length} thumbnails.`);
