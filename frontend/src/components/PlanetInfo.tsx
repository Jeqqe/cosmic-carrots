import React from 'react';
import GradientProgressBar from './planetInfo/GradientProgressBar';

import HorizontalProgressBar from './planetInfo/HorizontalProgressBar';
import PlanetInfoContainer from './planetInfo/PlanetInfoContainer';
import PlanetInfoHeader from './planetInfo/PlanetInfoHeader';
import PlanetInfoSection from './planetInfo/PlanetInfoSection';
import PlanetUpgradeButton from './planetInfo/PlanetUpgradeButton';

interface PlanetInfoProps {
  load: number;
  carrots: number;
}

export default function PlanetInfo({
  load,
  carrots,
}: PlanetInfoProps) {
  return (
    <PlanetInfoContainer>
      <div className='w-full h-screen p-6'>
        <PlanetInfoHeader carrots={carrots} troops={2} farmers={3} />
        <div className='flex flex-col gap-12 justify-between items-center h-2/3'>
          <PlanetInfoSection title='Production'>
            <HorizontalProgressBar title='Carrot' value={load} max={1000} />
            <HorizontalProgressBar title='Military' value={load} max={1000} />
            <HorizontalProgressBar title='Farmers' value={load} max={1000} />
          </PlanetInfoSection>

          <PlanetInfoSection title='Planet status'>
            <GradientProgressBar title='Soil quality' value={93} max={100} from='red-300' via='orange-300' to='lime-300' />
            <GradientProgressBar title='Pest control' value={76} max={100} from='red-300' via='orange-300' to='lime-300' />
            <GradientProgressBar title='Available resources' value={24} max={100} from='red-300' via='orange-300' to='lime-300' />
          </PlanetInfoSection>

          <PlanetInfoSection title='Researches'>
            <HorizontalProgressBar title='Farmers LvL.1' value={load} max={1000} />
          </PlanetInfoSection>

          { /* Upgrade buttons */ }
          <div className='grid grid-flow-row grid-cols-4 w-full h-full gap-2'>
            <PlanetUpgradeButton label='+1 Farmer' onClick={() => {}} active={false} />
          </div>
        </div>
      </div>
    </PlanetInfoContainer>
  );
}
