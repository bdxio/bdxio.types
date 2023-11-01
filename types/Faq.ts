export const FAQTargets = ["speakers", "sponsors", "participants"] as const;

export type FAQTarget = {
  id: number;
  target: (typeof FAQTargets)[number];
  description?: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};

export type FAQQuestion = {
  id: number;
  theme?: string;
  title: string;
  answer: string;
  faq_target?: FAQTarget;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};
