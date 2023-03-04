import React from 'react';
import CarrotSVG from '../media/CarrotSVG';

interface Level1Props {
  load: number;
  carrots: number;
}

export default function Level1({
  load, carrots,
}: Level1Props) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex w-32 h-32 animate-scale-up-center my-10'>
        <CarrotSVG />
      </div>
      <div className='w-full min-w-[32rem] h-3 bg-slate-800'>
        <div className='bg-orange-300 h-3' style={{ width: `${(load / 1000) * 100}%` }} />
        <div className='flex justify-end items-center w-full'>
          <small className='text-orange-300'>{`Carrots: ${carrots}`}</small>
        </div>
      </div>
    </div>
  );
}
