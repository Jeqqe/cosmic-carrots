import React, { useEffect, useMemo } from 'react';
import Head from 'next/head';

import PlanetSelection from '../components/PlanetSelection';
import Header from '../components/Header';
import CurrentPlanet from '../components/CurrentPlanet';
import {
  Storage,
  setAppStorageItem,
  getAppStorage,
  initPlanetStorage,
  setPlanetItems,
} from '../storage';
import { AppStorage, PlanetStorage } from '../../types/Storage';

export default function Play() {
  const [idleCloseTime, setIdleCloseTime] = React.useState(0);

  const [appStorage, setAppStorage] = React.useState<AppStorage>({} as AppStorage);
  const [selectedPlanet, setSelectedPlanet] = React.useState<PlanetStorage>({} as PlanetStorage);

  // onBlur and onFocus event listener
  React.useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIdleCloseTime(new Date().getTime());
      } else {
        const timeDiff = new Date().getTime() - idleCloseTime;
        const timeInSec = timeDiff / 1000;

        const newCarrots = selectedPlanet.carrots + (selectedPlanet.soils * 0.1 * timeInSec);

        if (newCarrots >= selectedPlanet.storage) {
          setPlanetItems(selectedPlanet.id, {
            carrots: selectedPlanet.storage,
            lastVisit: new Date(),
          });
          setSelectedPlanet({
            ...selectedPlanet,
            carrots: selectedPlanet.storage,
            lastVisit: new Date(),
          });
        } else {
          setPlanetItems(selectedPlanet.id, {
            carrots: newCarrots,
            lastVisit: new Date(),
          });
          setSelectedPlanet({
            ...selectedPlanet,
            carrots: newCarrots,
            lastVisit: new Date(),
          });
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [selectedPlanet]);

  React.useEffect(() => {
    const initAppStorage = getAppStorage();
    setAppStorage(initAppStorage);

    const { selectedPlanetId, planet } = initAppStorage;
    const initPlanet = planet.find(
      (planetItem) => planetItem.id === selectedPlanetId,
    );
    if (initPlanet) {
      setSelectedPlanet(initPlanet);
    } else {
      setSelectedPlanet(initPlanetStorage(selectedPlanetId));
    }
  }, []);

  // Carrot production loop
  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedPlanet.carrots >= selectedPlanet.storage) {
        setPlanetItems(selectedPlanet.id, {
          carrots: selectedPlanet.storage,
          lastVisit: new Date(),
        });
        setSelectedPlanet({
          ...selectedPlanet,
          carrots: selectedPlanet.storage,
          lastVisit: new Date(),
        });
        return;
      }

      // Check for last visit and calculate generated carrots
      const lastVisit = new Date(selectedPlanet.lastVisit);
      const timeDiff = new Date().getTime() - lastVisit.getTime();
      const timeInSec = timeDiff / 1000;

      const multiplier = timeInSec < 60 ? 1 : timeInSec;

      const newCarrots = selectedPlanet.carrots + (selectedPlanet.soils * 0.1 * multiplier);
      const storageCarrots = newCarrots > selectedPlanet.storage
        ? selectedPlanet.storage
        : newCarrots;

      setPlanetItems(selectedPlanet.id, {
        carrots: storageCarrots,
        lastVisit: new Date(),
      });
      setSelectedPlanet({ ...selectedPlanet, carrots: storageCarrots, lastVisit: new Date() });
    }, 100);
    return () => clearInterval(interval);
  }, [selectedPlanet]);

  const updatePlanetItem = (items: {
    [key in keyof PlanetStorage]?: PlanetStorage[key];
  }) => {
    setPlanetItems(selectedPlanet.id, items);
    setSelectedPlanet({ ...selectedPlanet, ...items });
  };

  const updateStorageItem = (item: keyof AppStorage, value: any) => {
    setAppStorageItem(item, value);
    setAppStorage({ ...appStorage, [item]: value });
  };

  const value = useMemo(() => ({
    updateStorageItem, updatePlanetItem, selectedPlanet, gold: appStorage.gold,
  }), [updateStorageItem, updatePlanetItem, selectedPlanet, appStorage.gold]);

  return (
    <Storage.Provider value={value}>
      <Head>
        <title>Cosmic Carrots - Play</title>
        <meta name='description' content='Gameplay of cosmic carrots' />
      </Head>
      <main className='flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]'>
        <Header />
        <PlanetSelection />
        <CurrentPlanet />
      </main>
    </Storage.Provider>
  );
}
