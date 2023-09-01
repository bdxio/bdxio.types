import type { Talk } from "./Talk";

export type Format = {
  id: number;
  conferenceHallId?: string;
  name?: string;
  description?: string;
  duration: string;
  talks: Talk[];
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};
