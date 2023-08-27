import type { Edition } from "./Edition";
import type { Media } from "./Media";
import type { Offer } from "./Offer";

export type Sponsor = {
  id: number;
  name: string;
  url?: string;
  logo: Media;
  offer?: Offer;
  editions: Edition[];
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};
