import { IPlant } from "./IPlant";

export interface IPlantsApi {
  createPlant(payload: Partial<IPlant>): void;
  loadPlants(userId: string): void;
  plants: IPlant[];
}
