export const faqTargets = ["speakers", "sponsors", "participants"] as const;

type FAQTargets = (typeof faqTargets)[number]

export function isFAQTarget(value: any): value is FAQTargets {
  return faqTargets.includes(value);
}

export type FAQTarget = {
  id: number;
  target: (typeof faqTargets)[number];
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
