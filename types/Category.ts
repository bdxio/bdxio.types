import type { HEX } from "./Color";
import type { Talk } from "./Talk";

export type Category = {
  id: number;
  name: string;
  conferenceHallId?: string;
  description?: string;
  color: HEX;
  talks?: Talk[];
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};
