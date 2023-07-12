import { Edition } from "./Edition";
import { Media } from "./Media";
import { Offer } from "./Offer";

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
