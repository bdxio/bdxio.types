import type { HEX } from "./Color";

export type Category = {
  id: number;
  name: string;
  conferenceHallId?: string;
  description?: string;
  color: HEX;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};
