import { IRegime } from "./IRegime";

export interface IDay {
  id: string;
  title: string;
  description: string;
  regime: IRegime;
}
