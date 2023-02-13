import React, { useContext, useEffect } from 'react';
import { CircleStackIcon } from '@heroicons/react/24/solid';

import PlannetSVG from './PlanetSVG';
import HoverButton from './HoverButton';
import ShopMenu from './ShopMenu';
import { Planet } from '../../types/Planet';
import { getPlanet } from '../settings';
import { Storage } from '../storage';
import { formatNumber, getPercentage } from '../utils';
import CarrotSVG from './CarrotSVG';

export default function CurrentPlanet() {
  const {
    updateStorageItem,
    updatePlanetItem,
    selectedPlanet: {
      id,
      soils,
      carrots,
      storage,
      fertilizerPrice,
      storagePrice,
    },
    gold,
  } = useContext(Storage);

  // Fetches the static data/settings about the selected planet
  const [selectedPlanet, setSelectedPlanet] = React.useState<Planet>({} as Planet);
  useEffect(() => {
    const planet = getPlanet(id);
    setSelectedPlanet(planet ?? {} as Planet);
  }, [id]);

  // Carrot sell amount selector
  const [carrotSellAmount, setCarrotSellAmount] = React.useState(0);
  useEffect(() => {
    if (carrotSellAmount > carrots) {
      setCarrotSellAmount(carrots);
    }
  }, [carrotSellAmount, carrots]);

  return (
    <div className='py-32'>
      <div className='flex justify-center'>
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

      <div className='flex flex-col justify-between h-content gap-2'>
        <div className='flex justify-center mt-8'>
          <div className='flex px-6 gap-2 my-auto'>
            <div className='h-6 w-6'>
              <CarrotSVG />
            </div>
            <h2 className='text-xl font-light text-purple-300'>{`Carrots: ${formatNumber(carrots, 2)}`}</h2>
          </div>
          <div className='flex px-6 gap-2'>
            <CircleStackIcon className='flex text-yellow-300 w-6 h-6 my-auto' />
            <h2 className='text-xl font-light text-purple-300'>{`Gold: ${formatNumber(gold, 2)}`}</h2>
          </div>
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

        <div className='flex flex-col gap-2 justify-center w-64'>
          <HoverButton
            onClick={() => {
              updatePlanetItem({
                carrots: carrots + 1,
              });
            }}
            buttonContent='Harvest carrots'
            hoverTitle='Harvest carrots'
            hoverContent='Harvest carrots manually by clicking this button. (Clicking and holding down enter will do this faster)'
          />
          <HoverButton
            onClick={() => {
              updatePlanetItem({
                soils: soils + 1,
                fertilizerPrice: fertilizerPrice * selectedPlanet.fertilizerPriceIncreaseRate,
              });
              updateStorageItem('gold', gold - fertilizerPrice);
            }}
            buttonContent='Fertilize soil'
            hoverTitle='Fertilize soil'
            hoverContent={(
              <>
                Fertilize soil to gain carrots faster.
                The current price per soil is
                {' '}
                <span className='font-bold'>
                  {formatNumber(fertilizerPrice, 2)}
                </span>
                {' '}
                gold.
              </>
            )}
            disabled={gold < fertilizerPrice}
          />
          <HoverButton
            onClick={() => {
              updatePlanetItem({
                storage: storage + selectedPlanet.storageSize,
                storagePrice: storagePrice * selectedPlanet.storagePriceIncreaseRate,
              });
              updateStorageItem('gold', gold - storagePrice);
            }}
            buttonContent='Buy storage'
            hoverTitle='Expand your storage space'
            hoverContent={(
              <>
                Expand your storage space to hold more carrots.
                The current price per storage space is
                {' '}
                <span className='font-bold'>
                  {formatNumber(storagePrice, 2)}
                </span>
                {' '}
                gold.
              </>
            )}
            disabled={gold < storagePrice}
          />

          { /* Sell carrots */ }
          <div className='w-full mt-4'>
            <h1 className='text-xl font-light text-zinc-300 pb-2'>Sell carrots</h1>
            <input
              type='range'
              min={0}
              max={carrots}
              value={carrotSellAmount}
              onChange={(e) => setCarrotSellAmount(parseInt(e.target.value, 10))}
              className='my-4 w-full accent-orange-400 appearance-none h-1 rounded-full bg-zinc-500 cursor-pointer'
            />

            <div className='flex gap-2 w-full'>
              <button
                className='w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50'
                type='button'
                disabled={carrots < carrotSellAmount}
                onClick={() => {
                  updatePlanetItem({
                    carrots: carrots - carrotSellAmount,
                  });
                  updateStorageItem('gold', gold + (carrotSellAmount * selectedPlanet.carrotPrice));
                }}
              >
                {`Sell: ${formatNumber(carrotSellAmount)}`}
              </button>
              <button
                className='w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50'
                type='button'
                disabled={carrots === 0}
                onClick={() => {
                  updatePlanetItem({
                    carrots: 0,
                  });
                  updateStorageItem('gold', gold + (carrots * selectedPlanet.carrotPrice));
                }}
              >
                Sell all
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
          <h2 className='text-2xl font-light text-zinc-300'>
            {`${formatNumber(gold, 2)}/${formatNumber(selectedPlanet.nextPlanetResearchCost)} (${(Math.round((gold / 100000) * 100))}%)`}
          </h2>
        </div>
        <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
          <div
            className='bg-gradient-to-r from-pink-300 to-orange-300 h-2.5 rounded-full'
            style={{ width: `${getPercentage(gold, selectedPlanet.nextPlanetResearchCost, false)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
