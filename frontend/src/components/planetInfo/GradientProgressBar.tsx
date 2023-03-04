import React from 'react';
import { getPercentage } from '../../utils';

interface GradientProgressBarProps {
  title: string;
  value: number;
  max: number;
  from: string;
  via: string;
  to: string;
}

export default function GradientProgressBar({
  title,
  value,
  max,
  from,
  via,
  to,
}: GradientProgressBarProps) {
  return (
    <div className='flex flex-col'>
      <h1 className='text-orange-300'>{title}</h1>
      <div className='flex flex-row justify-between items-center'>
        <div className={`w-full h-1 bg-gradient-to-r from-${from} via-${via} to-${to} text-end`}>
          <div className='h-1 bg-slate-800 ml-auto' style={{ width: `${100 - getPercentage(value, max)}%` }} />
          <small className='text-orange-300 text-xs'>{`${getPercentage(value, max)}%`}</small>
        </div>
      </div>
    </div>
  );
}
