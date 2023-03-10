import { PlanetSettings, PlanetStyle, Planet } from '../types/Planet';

export const PLANET_SETTINGS: PlanetSettings[] = [
  {
    id: 1,
    name: 'Zolthar',
    description: 'Zolthar is the first planet of the Solar System of this universe.',
    carrotPrice: 1,
    fertilizerPrice: 10,
    fertilizerPriceIncreaseRate: 1.5,
    storageSize: 1000,
    storagePrice: 1000,
    storagePriceIncreaseRate: 1.2,
    nextPlanetResearchCost: 100000,
  },
];

export const PLANET_STYLE: PlanetStyle[] = [
  {
    id: 1,
    name: 'Zolthar',
    color: 'text-red-300',
    fill: 'fill-red-400',
    stroke: 'stroke-red-400',
    size: 'w-16 h-16',
    paddingTop: 'pt-12',
  },
  {
    id: 2,
    name: 'Xantheum',
    color: 'text-blue-300',
    fill: 'fill-blue-400',
    stroke: 'stroke-blue-400',
    size: 'w-24 h-24',
    paddingTop: 'pt-10',
  },
  {
    id: 3,
    name: 'Nivara',
    color: 'text-green-300',
    fill: 'fill-green-400',
    stroke: 'stroke-green-400',
    size: 'w-16 h-16',
    paddingTop: 'pt-8',
  },
  {
    id: 4,
    name: 'Lunaris',
    color: 'text-yellow-300',
    fill: 'fill-yellow-400',
    stroke: 'stroke-yellow-400',
    size: 'w-24 h-24',
    paddingTop: 'pt-4',
  },
  {
    id: 5,
    name: 'Valtorix',
    color: 'text-purple-300',
    fill: 'fill-purple-400',
    stroke: 'stroke-purple-400',
    size: 'w-20 h-20',
    paddingTop: 'pt-8',
  },
  {
    id: 6,
    name: 'Arcanum',
    color: 'text-orange-300',
    fill: 'fill-orange-400',
    stroke: 'stroke-orange-400',
    size: 'w-32 h-32',
    paddingTop: 'pt-10',
  },
  {
    id: 7,
    name: 'Galaxion',
    color: 'text-pink-300',
    fill: 'fill-pink-400',
    stroke: 'stroke-pink-400',
    size: 'w-28 h-28',
    paddingTop: 'pt-12',
  },
];

/**
 * Get planet settings and style by planet id
 *
 * @param planetId the desired planet id
 * @returns planet settings and style
 */
export const getPlanet = (planetId: number): Planet | null => {
  const planetSettings = PLANET_SETTINGS.find((planet) => planet.id === planetId);
  const planetStyle = PLANET_STYLE.find((planet) => planet.id === planetId);

  if (!planetSettings || !planetStyle) {
    return null;
  }

  return { ...planetSettings, ...planetStyle };
};
