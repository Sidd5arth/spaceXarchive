import { icons } from "../utils/GetStatsDs";
export type StatData = {
  title: string;
  icon: keyof typeof icons;
  value: string;
  description: string;
};

export type StatsGridProps = {
  data: StatData[];
  articleLink: string;
  missionPatch: string;
};
