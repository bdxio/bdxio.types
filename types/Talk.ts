import type { Category } from "./Category";
import type { Edition } from "./Edition";
import type { Format } from "./Format";
import type { Slot } from "./Slot";
import type { Room } from "./Room";
import type { Speaker } from "./Speaker";

export type Talk = {
  id: number;
  conferenceHallId?: string;
  title: string;
  level?: string;
  comments?: string;
  language?: string;
  creationDate?: string;
  state?: string;
  abstract?: string;
  backup: boolean;
  openfeedbackUrl?: string;
  youtubeUrl?: string;
  category?: Category;
  slot?: Slot;
  room?: Room;
  speakers: Speaker[];
  format?: Format;
  edition?: Edition;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
};
