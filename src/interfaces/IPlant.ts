import { IDay } from "./IDay";

export interface IPlant {
  id: string;
  userId: string;
  description: string;
  title: string;
  diary: IDay[];
}
