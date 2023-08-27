import type { Slot } from "./Slot";

export type Format = {
  id: number;
  conferenceHallId?: string;
  name?: string;
  description?: string;
  duration: string;
  slots: Slot[];
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};
