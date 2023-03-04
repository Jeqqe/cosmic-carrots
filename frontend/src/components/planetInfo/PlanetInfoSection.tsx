import React from 'react';

interface PlanetInfoSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function PlanetInfoSection({
  title,
  children,
}: PlanetInfoSectionProps) {
  return (
    <div className='flex flex-col w-full gap-2'>
      <h1 className='text-orange-200 font-medium'>{title}</h1>
      {children}
    </div>
  );
}
