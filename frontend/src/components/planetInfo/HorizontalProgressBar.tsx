import React from 'react';

interface HorizontalProgressBarProps {
  title: string;
  value: number;
  max: number;
}

export default function HorizontalProgressBar({
  title,
  value,
  max,
}: HorizontalProgressBarProps) {
  return (
    <div className='flex flex-col'>
      <h1 className='text-orange-300'>{title}</h1>
      <div className='flex flex-row justify-between items-center'>
        <div className='w-full h-1 bg-slate-800'>
          <div className='bg-orange-300 h-1' style={{ width: `${(value / max) * 100}%` }} />
        </div>
      </div>
    </div>
  );
}
