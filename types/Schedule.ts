import type { Room } from "./Room";
import type { Talk } from "./Talk";

type ScheduleItem = {
  time: string;
  name: string;
  talks?: Talk[];
  rooms?: Room[];
};

export type Schedule = ScheduleItem[];
