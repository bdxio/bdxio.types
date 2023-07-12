import { Talk } from "./Talk";

type ScheduleItem = {
  slot: string;
  formattedSlot: string;
  name: string;
  talks: Talk[];
  space?: boolean;
};

export type Schedule = ScheduleItem[];
