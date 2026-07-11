export const portfolio = {
  weddings: { count: 24, directory: "Weddings" },
  christenings: { count: 9, directory: "Christenings" },
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
      src: `/portfolio/${directory}/${index + 1}.jpg`,
      category: category as PortfolioCategory,
    })),
);
