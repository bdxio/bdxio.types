import { Format } from "./Format";
import { Room } from "./Room";
import { Talk } from "./Talk";


export type Slot = {
  id: number;
  startSlot: string;
  endSlot: string;
  name?: string;
  naturalId?: string;
  space?: string;
  talks: Talk[];
  rooms: Room[];
  format?: Format;
  createdAt: string;
  puslishedAt: string;
  updatedAt: string;
};
