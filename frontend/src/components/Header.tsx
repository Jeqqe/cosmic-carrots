import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className='fixed w-64 h-screen'>
      {open && (
        <>
          <button type='button' className='flex absolute text-purple-300 bottom-0 justify-center gap-2 items-center w-full h-16 my-4 px-8 hover:text-white' onClick={() => setOpen(false)}>
            <ArrowLeftIcon className='w-5 h-5' />
            Close Menu
          </button>
          <div className='bg-zinc-900/10 flex flex-col h-screen top-0 left-0 px-8 py-4'>
            <div className='flex flex-col h-full w-full gap-4 justify-center'>
              <Link
                href='/'
                className='flex w-full h-[10%] text-2xl font-medium text-purple-300'
              >
                Cosmic Carrots
              </Link>
              <Link href='/' className='text-left text-xl font-light text-purple-300 hover:text-white'>Home</Link>
              <button type='button' disabled className='text-left text-xl font-light text-purple-300/50'>Settings</button>
              <button type='button' disabled className='text-left text-xl font-light text-purple-300/50'>Change log</button>
              <a target='_blank' rel='noopener noreferrer' href='https://github.com/Jeqqe/cosmic-carrots' className='text-xl font-light text-purple-300 hover:text-white'>Github</a>
            </div>
          </div>
        </>
      )}
      {!open && (
        <button type='button' className='flex absolute text-purple-300 bottom-0 justify-center gap-2 items-center w-full h-16 my-4 px-8 hover:text-white' onClick={() => setOpen(true)}>
          Open Menu
          <ArrowRightIcon className='w-5 h-5' />
        </button>
      )}
    </div>
  );
}
