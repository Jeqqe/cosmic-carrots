export interface PlanetStyle {
  id: number
  name: string
  color: string
  fill: string
  stroke: string
  size: string
  paddingTop: string
}

export interface PlanetSettings {
  id: number;
  name: string;
  description: string;
  carrotPrice: number;
  fertilizerPrice: number;
  fertilizerPriceIncreaseRate: number;
  storageSize: number;
  storagePrice: number;
  storagePriceIncreaseRate: number;
  nextPlanetResearchCost: number;
}

export type Planet = PlanetSettings & PlanetStyle;
