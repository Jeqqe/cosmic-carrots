import React from 'react';
import CarrotSVG from '../../media/CarrotSVG';
import FarmerSVG from '../../media/FarmerSVG';
import TroopSVG from '../../media/TroopSVG';
import PlanetInfoHeaderItem from './PlanetInfoHeaderItem';

interface PlanetInfoHeaderProps {
  carrots: number;
  troops: number;
  farmers: number;
}

export default function PlanetInfoHeader({
  carrots,
  troops,
  farmers,
}: PlanetInfoHeaderProps) {
  return (
    <div className='flex flex-row justify-between items-center pb-16'>
      <div className='basis-1/2 h-full'>
        <h1 className='text-orange-200 font-medium'>Eldoria</h1>
      </div>
      <div className='basis-1/2 flex flex-row h-full justify-between text-orange-300'>
        <PlanetInfoHeaderItem icon={<CarrotSVG />} value={carrots} animate />
        <PlanetInfoHeaderItem icon={<TroopSVG />} value={troops} />
        <PlanetInfoHeaderItem icon={<FarmerSVG />} value={farmers} />
      </div>
    </div>
  );
}
