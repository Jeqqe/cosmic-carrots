import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import React from 'react';

export default function ShopMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button
        className='flex justify-center gap-2 bg-gradient-to-r from-cyan-300 to-lime-300 text-zinc-800 font-bold py-2 px-4 rounded-full'
        type='button'
        onClick={() => {
          setOpen(true);
        }}
      >
        <ShoppingBagIcon className='w-6 h-6' />
        SHOP
      </button>
      {open && (
        <div
          className='fixed top-0 left-0 flex justify-center items-center z-40 absolute h-full w-full bg-red-100/10 backdrop-blur-sm'
        >
          <div className='absolute top-0 left-0 w-full h-full' onClick={() => { setOpen(false); }} aria-hidden='true' />
          <div className='w-[1000px] h-[700px] bg-zinc-800 p-12 rounded z-50'>
            <div className='flex justify-between items-center'>
              <h1 className='text-2xl font-light text-zinc-300'>Planet Shop</h1>
              <button
                className='bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-2 px-4 rounded-full'
                type='button'
                onClick={() => {
                  setOpen(false);
                }}
              >
                X
              </button>
            </div>
            <div className='flex justify-center items-center w-[800px] h-full w-full px-12 py-24'>
              { /* Not implemented */ }
              <h1 className='text-2xl font-light text-zinc-300'>Not implemented yet</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
