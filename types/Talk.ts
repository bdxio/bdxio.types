import { Category } from "./Category";
import { Edition } from "./Edition";
import { Format } from "./Format";
import { Slot } from "./Slot";
import { Room } from "./Room";
import { Speaker } from "./Speaker";

export type Talk = {
  id: number;
  conferenceHallId?: string;
  title?: string;
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
