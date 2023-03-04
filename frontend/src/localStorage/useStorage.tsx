import { useEffect, useState } from 'react';
import { AppStorage, PlanetStorage } from '../../types/Storage';
import { getAppStorage, setAppStorage } from './Storage';

export default () => {
  const [storage, setStorage] = useState<AppStorage>();
  const [updateTime, setUpdateTime] = useState(new Date());

  useEffect(() => {
    const appStorage = getAppStorage();
    setStorage(appStorage);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdateTime(new Date());
      setAppStorage(storage!);
    }, 5000);
    return () => clearInterval(interval);
  }, [updateTime]);

  const updateGold = (gold: number) => {
    setStorage({ ...storage!, gold });
  };

  const updateCurrentPlanet = (selectedPlanetId: number) => {
    setStorage({ ...storage!, selectedPlanetId });
  };

  const updatePlanet = (planetId: number, planet: Partial<PlanetStorage>) => {
    const newPlanets = storage!.planet.map((planetItem) => {
      if (planetItem.id === planetId) {
        return { ...planetItem, ...planet };
      }
      return planetItem;
    });
    setStorage({ ...storage!, planet: newPlanets });
  };

  return {
    storage,
    updateGold,
    updateCurrentPlanet,
    updatePlanet,
  };
};
