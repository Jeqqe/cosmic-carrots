import React from 'react';
import { PLANET_STYLE } from '../settings';

import PlannetSVG from './PlanetSVG';

export default function PlanetSelection() {
  return (
    <div className='flex gap-8 justify-center pt-8'>
      {
        PLANET_STYLE.map((planet) => (
          <div className='flex flex-col justify-between w-32 h-content gap-6' key={planet.name}>
            <div className={`${planet.size} mx-auto mt-auto`}>
              <PlannetSVG
                size={planet.size}
                fill={planet.id === 1 ? planet.fill : undefined}
                stroke={planet.id === 1 ? planet.stroke : undefined}
              />
            </div>
            <h2
              className={`text-xl font-medium text-center ${planet.id === 1 ? planet.color : 'text-zinc-500'}`}
            >
              {planet.id === 1 ? planet.name : '? ? ?'}
            </h2>
          </div>
        ))
      }
    </div>
  );
}
