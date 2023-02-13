/* eslint-disable no-console */
import { createContext } from 'react';
import { AppStorage, PlanetStorage } from '../types/Storage';
import { getPlanet } from './settings';

export const setAppStorage = (appStorage: AppStorage) => {
  localStorage.setItem('cosmic-carrots', JSON.stringify(appStorage));
};

export const getAppStorage = () => {
  const appStorage = localStorage.getItem('cosmic-carrots');
  if (appStorage) {
    return JSON.parse(appStorage) as AppStorage;
  }
  const newAppStorage: AppStorage = {
    selectedPlanetId: 1,
    gold: 0,
    planet: [],
  };
  setAppStorage(newAppStorage);
  return newAppStorage;
};

export const getAppStorageItem = (item: keyof AppStorage) => {
  const appStorage = getAppStorage();
  return appStorage[item];
};

export const setAppStorageItem = (item: keyof AppStorage, value: any) => {
  const appStorage = getAppStorage();
  appStorage[item] = value;
  setAppStorage(appStorage);
};

export const getPlanetStorage = () => {
  const appStorage = getAppStorage();
  return appStorage.planet;
};

export const setPlanetStorage = (planetStorage: AppStorage['planet']) => {
  const appStorage = getAppStorage();
  appStorage.planet = planetStorage;
  setAppStorage(appStorage);
};

export const getPlanetItem = (planetId: number, item: keyof PlanetStorage) => {
  const planetStorage = getPlanetStorage();
  if (planetStorage) {
    const foundPlanet = planetStorage.find((planet) => planet.id === planetId);
    if (foundPlanet) {
      return foundPlanet[item];
    }
  }
  return null;
};

export const setPlanetItem = (
  planetId: number,
  item: keyof PlanetStorage,
  value: any,
) => {
  const planetStorage = getPlanetStorage();
  if (planetStorage) {
    const foundPlanet = planetStorage.find((planet) => planet.id === planetId);
    if (foundPlanet) {
      foundPlanet[item] = value;
      setPlanetStorage(planetStorage);
    }
  }
};

export const setPlanetItems = (
  planetId: number,
  items: { [key in keyof PlanetStorage]?: any },
) => {
  const planetStorage = getPlanetStorage();
  if (planetStorage) {
    const foundPlanet = planetStorage.find((planet) => planet.id === planetId);
    if (foundPlanet) {
      Object.keys(items).forEach((key) => {
        foundPlanet[key as keyof PlanetStorage] = items[key as keyof PlanetStorage];
      });
      setPlanetStorage(planetStorage);
    }
  }
};

export const initPlanetStorage = (planetId: number) => {
  const planetStorage = getPlanetStorage();
  let foundPlanet = planetStorage.find((planet) => planet.id === planetId);
  if (!foundPlanet) {
    const planetInfo = getPlanet(planetId);
    foundPlanet = {
      id: planetId,
      carrots: 0,
      soils: 0,
      fertilizerPrice: planetInfo?.fertilizerPrice ?? 0,
      storage: planetInfo?.storageSize ?? 0,
      storagePrice: planetInfo?.storagePrice ?? 0,
      pestControl: 0,
      lastVisit: new Date(),
    };
    planetStorage.push(foundPlanet);
    setPlanetStorage(planetStorage);
  }
  return foundPlanet;
};

export const Storage = createContext({
  updatePlanetItem: (items: {
    [key in keyof PlanetStorage]?: PlanetStorage[key];
  }) => {
    if (items) console.log('update function not defined.');
  },
  updateStorageItem: (item: keyof AppStorage, value: any) => {
    if (item && value) console.log('update function not defined.');
  },
  selectedPlanet: {} as PlanetStorage,
  gold: 0,
});
