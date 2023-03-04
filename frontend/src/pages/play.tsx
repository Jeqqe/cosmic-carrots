'use client';

import Head from 'next/head';
import React, { useEffect } from 'react';

import Level1 from '../components/Level1';
import PlanetInfo from '../components/PlanetInfo';
import Sidebar from '../components/Sidebar';

export default function Play() {
  const [load, setLoad] = React.useState(0);
  const [carrots, setCarrots] = React.useState(1);
  const [level, setLevel] = React.useState(1);
  const [transition, setTransition] = React.useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoad((prev) => prev + 1);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (load >= 1000) {
      setCarrots((prev) => prev + 1);
      setLoad(0);

      setTransition(true);
      setTimeout(() => {
        setLevel((prev) => prev + 1);
        setTransition(false);
      }, 1000);
    }
  }, [load]);

  return (
    <div>
      <div
        className='fixed h-screen w-screen top-0 left-0 bg-cover bg-bottom bg-no-repeat'
        style={{
          backgroundImage: 'url("/media/background.png")',
        }}
      />
      <Head>
        <title>Play</title>
        <meta name='description' content='Play' />
      </Head>
      <div className='w-full h-full min-h-screen bg-slate-900/[97%] backdrop-blur-sm'>
        {
          level === 1 && (
            <div className={`flex flex-col justify-center items-center ${transition && 'animate-fade'} w-full h-full min-h-screen `}>
              <Level1 load={load} carrots={carrots} />
            </div>
          )
        }
        {
          level > 1 && (
            <div className='flex flex-row gap-4'>
              <Sidebar />
              <PlanetInfo load={load} carrots={carrots} />
            </div>
          )
        }
      </div>
    </div>
  );
}
