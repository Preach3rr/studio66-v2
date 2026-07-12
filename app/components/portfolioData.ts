export const portfolio = {
  weddings: { count: 24, directory: "Weddings" },
  christenings: { count: 9, directory: "Christenings" },
  events: { count: 8, directory: "Events" },
  portraits: {
    count: 4,
    directory: "Portraits",
    files: ["1.JPG", "2.JPG", "3.jpg", "4.JPG"],
  },
  "real-estate": { count: 0, directory: "Real-Estate" },
  commercial: { count: 0, directory: "Commercial" },
} as const;

export type PortfolioCategory = keyof typeof portfolio;

export type PortfolioImage = {
  src: string;
  category: PortfolioCategory;
};

export const portfolioImages: PortfolioImage[] = Object.entries(portfolio).flatMap(
  ([category, item]) => {
    const typedCategory = category as PortfolioCategory;

    if ("files" in item && item.files.length > 0) {
      return item.files.map((fileName) => ({
        src: `/portfolio/${item.directory}/${fileName}`,
        category: typedCategory,
      }));
    }

    return Array.from({ length: item.count }, (_, index) => ({
      src: `/portfolio/${item.directory}/${index + 1}.jpg`,
      category: typedCategory,
    }));
  },
);
