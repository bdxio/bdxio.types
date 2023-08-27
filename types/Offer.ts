import type { Sponsor } from "./Sponsor";

export type Offer = {
  id: number;
  label: string;
  description: string;
  price: string;
  full: boolean;
  sponsors: Sponsor[];
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};
