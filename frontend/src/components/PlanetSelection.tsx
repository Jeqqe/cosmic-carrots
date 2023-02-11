import React from 'react';
import { type Planet } from '../../types/Planet';

import PlannetSVG from './PlanetSVG';

export default function PlanetSelection({
  planets,
}: {
  planets: Planet[];
}) {
  return (
    <div className='flex gap-8 justify-center mt-auto py-12'>
      {
        planets.map((planet) => (
          <div className='flex flex-col justify-between w-32 h-content gap-6' key={planet.name}>
            <div className={`${planet.paddingTop} ${planet.size} mx-auto my-auto`}>
              <PlannetSVG
                size={planet.size}
                fill={planet.activated ? planet.fill : undefined}
                stroke={planet.activated ? planet.stroke : undefined}
              />
            </div>
            <h2
              className={`text-xl font-medium text-center ${planet.activated ? planet.color : 'text-zinc-500'}`}
            >
              {planet.activated ? planet.name : '? ? ?'}
            </h2>
          </div>
        ))
      }
    </div>
  );
}
