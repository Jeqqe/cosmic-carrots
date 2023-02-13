export interface PlanetStorage {
  id: number
  carrots: number
  soils: number
  fertilizerPrice: number
  pestControl: number
  storage: number
  storagePrice: number
  lastVisit: Date
}

export interface AppStorage {
  selectedPlanetId: number
  gold: number
  planet: PlanetStorage[]
}
