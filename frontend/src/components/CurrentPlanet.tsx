import React from 'react';
import { CircleStackIcon } from '@heroicons/react/24/solid';
import { type Planet } from '../../types/Planet';

import PlannetSVG from './PlanetSVG';
import HoverButton from './HoverButton';
import ShopMenu from './ShopMenu';

export default function CurrentPlanet({
  carrots,
  gold,
  soils,
  storage,
  selectedPlanet,
  handleHarvest,
  handleSell,
  handleFertilize,
  handleBuyStorage,
}: {
  carrots: number;
  gold: number;
  soils: number;
  storage: number;
  selectedPlanet: Planet;
  handleHarvest: () => void;
  handleSell: (amount: number) => void;
  handleFertilize: () => void;
  handleBuyStorage: () => void;
}) {
  // const [hovered, setHovered] = React.useState(false);

  return (
    <>
      <div className='flex justify-center mt-8'>
        <div className='flex flex-col justify-between h-content gap-2'>
          <div>
            <PlannetSVG
              size='w-32 h-32'
              fill={selectedPlanet.fill ?? undefined}
              stroke={selectedPlanet.stroke ?? undefined}
            />
          </div>
          <h1 className='text-xl font-light text-center text-zinc-300'>Selected planet:</h1>
          <h2 className={`text-2xl font-medium text-center ${selectedPlanet.color ?? 'text-zinc-500'}`}>
            {selectedPlanet.name ?? ''}
          </h2>
        </div>
      </div>

      {/* Planet information */}
      <div className='flex gap-8 justify-between w-[800px] mx-auto py-12'>
        <div className='flex flex-col justify-between'>
          <h1 className='text-2xl font-light text-zinc-300 pb-6'>Planet information</h1>
          <ul className='flex flex-col gap-3'>
            <li className='text-xl font-light text-zinc-300'>
              <span className='font-bold text-zinc-300'>Climate: </span>
              <span className='text-green-300'>Temperate</span>
            </li>
            <li className='text-xl font-light text-zinc-300'>
              <span className='font-bold text-zinc-300'>Soil Fertilized: </span>
              <span className='text-green-300'>{soils}</span>
            </li>
            <li className='text-xl font-light text-zinc-300'>
              <span className='font-bold text-zinc-300'>Storage space: </span>
              <span className='text-green-300'>
                {Math.round(storage / 1000)}
                k
              </span>
            </li>
          </ul>
          <ShopMenu />
        </div>

        <div className='flex flex-col gap-2 justify-center'>
          <HoverButton
            onClick={() => {
              handleHarvest();
            }}
            buttonContent='Harvest carrots'
            hoverTitle='Harvest carrots'
            hoverContent='Sell 100 carrots for 100 * selectedPlanet.carrotPrice gold'
          />
          <HoverButton
            onClick={() => {
              handleFertilize();
            }}
            buttonContent='Fertilize soil'
            hoverTitle='Fertilize soil'
            hoverContent='Sell 100 carrots for 100 * selectedPlanet.carrotPrice gold'
            disabled={gold < 100}
          />
          <HoverButton
            onClick={() => {
              handleBuyStorage();
            }}
            buttonContent='Buy storage'
            hoverTitle='Expand your storage space'
            hoverContent='Sell 100 carrots for 100 * selectedPlanet.carrotPrice gold'
            disabled={gold < 1000}
          />

          { /* Sell carrots */ }
          <div className='mt-4'>
            <h1 className='text-xl font-light text-zinc-300 pb-2'>Sell carrots</h1>
            <div className='flex gap-2'>
              <button
                className='bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50'
                type='button'
                disabled={carrots < 10}
                onClick={() => {
                  handleSell(10);
                }}
              >
                10
              </button>
              <button
                className='bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50'
                type='button'
                disabled={carrots < 100}
                onClick={() => {
                  handleSell(100);
                }}
              >
                100
              </button>
              <button
                className='bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50'
                type='button'
                disabled={carrots < 1000}
                onClick={() => {
                  handleSell(1000);
                }}
              >
                1000
              </button>
            </div>
          </div>
        </div>
      </div>

      { /* Planet action loading bars */ }
      <div className='flex flex-col gap-2 justify-center w-[800px] mx-auto'>
        <div className='flex gap-2 justify-between'>
          <h1 className='flex text-2xl font-light text-zinc-300'>
            Next planet research
            (
            <CircleStackIcon className='flex text-yellow-300 w-6 h-6 my-auto' />
            )
          </h1>
          <h2 className='text-2xl font-light text-zinc-300'>{`${gold}/100k (${(Math.round((gold / 100000) * 100))}%)`}</h2>
        </div>
        <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
          <div className='bg-gradient-to-r from-pink-300 to-orange-300 h-2.5 rounded-full' style={{ width: `${(Math.round((gold / 100000) * 100))}%` }} />
        </div>
      </div>
    </>
  );
}
