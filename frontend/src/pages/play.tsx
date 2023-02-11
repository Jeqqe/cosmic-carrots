import React, { useEffect } from 'react';
import Head from 'next/head';

import PlanetSelection from '../components/PlanetSelection';
import Header from '../components/Header';
import CurrentPlanet from '../components/CurrentPlanet';
import { Planet } from '../../types/Planet';

const PLANETS = [
  {
    name: 'Zolthar',
    color: 'text-red-300',
    fill: 'fill-red-400',
    stroke: 'stroke-red-400',
    size: 'w-16 h-16',
    paddingTop: 'pt-4',
    activated: true,
  },
  {
    name: 'Xantheum',
    color: 'text-blue-300',
    fill: 'fill-blue-400',
    stroke: 'stroke-blue-400',
    size: 'w-24 h-24',
    paddingTop: 'pt-8',
    activated: false,
  },
  {
    name: 'Nivara',
    color: 'text-green-300',
    fill: 'fill-green-400',
    stroke: 'stroke-green-400',
    size: 'w-16 h-16',
    paddingTop: 'pt-10',
    activated: false,
  },
  {
    name: 'Lunaris',
    color: 'text-yellow-300',
    fill: 'fill-yellow-400',
    stroke: 'stroke-yellow-400',
    size: 'w-24 h-24',
    paddingTop: 'pt-11',
    activated: false,
  },
  {
    name: 'Valtorix',
    color: 'text-purple-300',
    fill: 'fill-purple-400',
    stroke: 'stroke-purple-400',
    size: 'w-20 h-20',
    paddingTop: 'pt-10',
    activated: false,
  },
  {
    name: 'Arcanum',
    color: 'text-orange-300',
    fill: 'fill-orange-400',
    stroke: 'stroke-orange-400',
    size: 'w-32 h-32',
    paddingTop: 'pt-8',
    activated: false,
  },
  {
    name: 'Galaxion',
    color: 'text-pink-300',
    fill: 'fill-pink-400',
    stroke: 'stroke-pink-400',
    size: 'w-28 h-28',
    paddingTop: 'pt-4',
    activated: false,
  },
];

export default function Play() {
  const [carrots, setCarrots] = React.useState(-1);
  const [gold, setGold] = React.useState(-1);
  const [soils, setSoils] = React.useState(-1);
  const [storage, setStorage] = React.useState(-1);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedPlanet, setSelectedPlanet] = React.useState<Planet>(PLANETS[0]!);

  useEffect(() => {
    if (carrots === -1) {
      const savedCarrots = localStorage.getItem('carrots');
      if (savedCarrots) {
        setCarrots(parseInt(savedCarrots, 10));
      } else {
        setCarrots(0);
      }
    }

    if (gold === -1) {
      const savedGold = localStorage.getItem('gold');
      if (savedGold) {
        setGold(parseInt(savedGold, 10));
      } else {
        setGold(0);
      }
    }

    if (soils === -1) {
      const savedSoils = localStorage.getItem('soils');
      if (savedSoils) {
        setSoils(parseInt(savedSoils, 10));
      } else {
        setSoils(0);
      }
    }

    if (storage === -1) {
      const savedStorage = localStorage.getItem('storage');
      if (savedStorage) {
        setStorage(parseInt(savedStorage, 10));
      } else {
        setStorage(1000);
      }
    }
  }, [carrots, gold, soils, storage]);

  useEffect(() => {
    if (carrots !== -1) {
      localStorage.setItem('carrots', carrots.toString());
    }

    if (gold !== -1) {
      localStorage.setItem('gold', gold.toString());
    }

    if (soils !== -1) {
      localStorage.setItem('soils', soils.toString());
    }

    if (storage !== -1) {
      localStorage.setItem('storage', storage.toString());
    }
  }, [carrots, gold, soils, storage]);

  useEffect(() => {
    if (carrots === -1) return undefined;

    const interval = setInterval(() => {
      if (carrots >= storage) {
        setCarrots(storage);
        clearInterval(interval);
        return;
      }
      setCarrots(carrots + (soils * 0.1));
    }, 100);
    return () => clearInterval(interval);
  }, [carrots, soils, storage]);

  const handleHarvest = () => {
    setCarrots(carrots + 1);
  };

  const handleSell = (amount: number) => {
    if (carrots >= amount) {
      setCarrots(carrots - amount);
      setGold(gold + amount);
    }
  };

  const handleFertilize = () => {
    if (gold >= 100) {
      setGold(gold - 100);
      setSoils(soils + 1);
    }
  };

  const handleBuyStorage = () => {
    if (gold >= 1000) {
      setGold(gold - 1000);
      setStorage(storage + 1000);
    }
  };

  return (
    <>
      <Head>
        <title>Cosmic Carrots - Play</title>
        <meta name='description' content='Gameplay of cosmic carrots' />
      </Head>
      <main className='flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]'>
        <Header
          carrots={carrots}
          gold={gold}
        />
        <CurrentPlanet
          carrots={carrots}
          gold={gold}
          soils={soils}
          storage={storage}
          selectedPlanet={selectedPlanet}
          handleHarvest={handleHarvest}
          handleSell={handleSell}
          handleFertilize={handleFertilize}
          handleBuyStorage={handleBuyStorage}
        />
        <PlanetSelection planets={PLANETS} />
      </main>
    </>
  );
}
