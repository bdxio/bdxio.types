import type { Talk } from "./Talk";
import type { Slot } from "./Slot";
import type { Offer } from "./Offer";

export type Edition = {
  id: number;
  date: string;
  year: string;
  talks?: Talk[];
  slots?: Slot[];
  offers?: Offer[];
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};
