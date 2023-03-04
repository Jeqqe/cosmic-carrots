'use client';

import { AppStorage, PlanetStorage } from '../../types/Storage';

import localStorageSettings from '../settings/localStorage';

// Storage getter and setter ----------------------------------------------------------------

export const setAppStorage = (storage: AppStorage) => {
  localStorage.setItem(localStorageSettings.name, JSON.stringify(storage));
};

export const getAppStorage = (): AppStorage => {
  const storage = localStorage.getItem(localStorageSettings.name);
  if (storage) {
    try {
      return JSON.parse(storage);
    } catch (e) {
      console.error('Failed to parse storage from localStorage', e);
    }
  }

  setAppStorage(localStorageSettings.storage);
  return localStorageSettings.storage;
};

// Storage updating ----------------------------------------------------------------

export const updateAppStorage = (newStorage: Partial<AppStorage>) => {
  const storage = getAppStorage();
  setAppStorage({ ...storage, ...newStorage });
};

// Update the storage for a specific planet
export const updatePlanetStorage = (planetId: number, newStorage: Partial<PlanetStorage>) => {
  const storage = getAppStorage();
  const planetIndex = storage.planet.findIndex((planet) => planet.id === planetId);
  const planet = storage.planet[planetIndex];

  if (!planet) {
    console.error(`Tried to update storage for planet ${planetId} but it doesn't exist in storage.`);
    return;
  }

  storage.planet[planetIndex] = { ...planet, ...newStorage };
  setAppStorage(storage);
};

// Item Updating ----------------------------------------------------------------
