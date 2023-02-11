import { CircleStackIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';
import CarrotSVG from './CarrotSVG';

export default function Header({
  carrots,
  gold,
}: {
  carrots: number;
  gold: number;
}) {
  return (
    <div className='flex justify-between items-center px-8 py-4'>
      <div className='flex gap-1 items-center'>
        <Link href='/' className='text-2xl font-bold text-purple-300'>Cosmic Carrots</Link>
      </div>
      <div className='flex gap-4 items-center'>
        <div className='flex px-6 gap-2 my-auto'>
          <div className='h-6 w-6'>
            <CarrotSVG />
          </div>
          <h2 className='text-xl font-light text-purple-300'>{`Carrots: ${Math.round(carrots)}`}</h2>
        </div>
        <div className='flex px-6 gap-2'>
          <CircleStackIcon className='flex text-yellow-300 w-6 h-6 my-auto' />
          <h2 className='text-xl font-light text-purple-300'>{`Gold: ${gold}`}</h2>
        </div>
      </div>
    </div>
  );
}
