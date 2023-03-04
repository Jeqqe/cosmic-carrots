import React from 'react';

interface PlanetInfoContainerProps {
  children: React.ReactNode;
}

export default function PlanetInfoContainer({
  children,
}: PlanetInfoContainerProps) {
  return (
    <div className='basis-3/4 h-full '>
      <div className='grid grid-cols-2 gap-4 py-32 px-12'>
        <div className='col-span-1 bg-gradient-to-r from-slate-400/10 via-zinc-500/10 to-slate-600/10 shadow-lg shadow-slate-600/20 rounded-lg'>
          {children}
        </div>
      </div>
    </div>
  );
}
