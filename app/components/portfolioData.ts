export const portfolio = {
  weddings: { count: 24, directory: "Weddings" },
  christenings: { count: 15, directory: "Christenings" },
  events: { count: 8, directory: "Events" },
  portraits: { count: 4, directory: "Portraits" },
  "real-estate": { count: 0, directory: "Real-Estate" },
  commercial: { count: 0, directory: "Commercial" },
} as const;

export type PortfolioCategory = keyof typeof portfolio;

export type PortfolioImage = {
  src: string;
  category: PortfolioCategory;
};

export const portfolioImages: PortfolioImage[] = Object.entries(portfolio).flatMap(
  ([category, { count, directory }]) =>
    Array.from({ length: count }, (_, index) => ({
      src: `/portfolio-web/${directory}/${index + 1}.webp`,
      category: category as PortfolioCategory,
    })),
);
