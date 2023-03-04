import { PlanetSettings } from './Planet';

export type PlanetStorage = Pick<
PlanetSettings, 'id' | 'carrotPrice' | 'fertilizerPrice' | 'storageSize' | 'storagePrice'
> & {
  carrots: number
  soils: number
  lastVisit: Date
};

export interface AppStorage {
  selectedPlanetId: number
  gold: number
  planet: PlanetStorage[]
}
