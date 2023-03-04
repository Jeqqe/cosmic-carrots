import React from 'react';

interface PlanetUpgradeButtonProps {
  label: string;
  onClick: () => void;
  active: boolean;
}

export default function PlanetUpgradeButton({
  label,
  onClick,
  active,
}: PlanetUpgradeButtonProps) {
  const buttonClasses = active ? 'bg-lime-400/10 text-lime-200' : 'bg-zinc-200/10 text-zinc-300 hover:bg-zinc-200/20';
  return (
    <div className='group relative'>
      <button
        type='button'
        className={`flex justify-center items-center place-self-center ${buttonClasses} rounded-lg w-full h-full p-2 z-20`}
        onClick={() => onClick()}
      >
        <p>{label}</p>
      </button>
    </div>
  );
}
