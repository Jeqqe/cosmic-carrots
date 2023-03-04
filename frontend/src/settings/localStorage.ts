import { AppStorage, PlanetStorage } from '../../types/Storage';
import { PLANET_SETTINGS } from './planet';

const generateDefaultPlanet = (planetId: number): PlanetStorage | null => {
  const planetSettings = PLANET_SETTINGS.find((planet) => planet.id === planetId);
  if (!planetSettings) return null;

  const {
    fertilizerPrice,
    storageSize,
    storagePrice,
    carrotPrice,
  } = planetSettings;

  return {
    id: planetId,
    carrots: 0,
    soils: 0,
    storageSize,
    storagePrice,
    fertilizerPrice,
    carrotPrice,
    lastVisit: new Date(),
  };
};

export default {
  name: 'cosmic-carrots',
  storage: {
    gold: 0,
    currentPlanetId: 0,
    planets: [
      generateDefaultPlanet(1),
    ],
  } as unknown as AppStorage,
};
