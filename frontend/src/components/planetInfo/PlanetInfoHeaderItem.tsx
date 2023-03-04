import React from 'react';

interface PlanetInfoHeaderItemProps {
  icon: React.ReactNode;
  value: number;
  animate?: boolean;
}

export default function PlanetInfoHeaderItem({
  icon,
  value,
  animate = false,
}: PlanetInfoHeaderItemProps) {
  const [animateClass] = React.useState(() => (animate ? 'w-6 h-6 animate-scale-up-center mr-1' : 'w-5 h-5 mr-2'));
  return (
    <div className='flex justify-center items-center'>
      <div className={animateClass}>
        {icon}
      </div>
      <h1>{value}</h1>
    </div>
  );
}
