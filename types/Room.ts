import { Talk } from "./Talk";
import { Slot } from "./Slot";

export type Room = {
  id: number;
  name: string;
  naturalId?: string;
  iframeId?: string;
  slots: Slot[];
  talks: Talk[];
  createdAt: string;
  puslishedAt: string;
  updatedAt: string;
};
