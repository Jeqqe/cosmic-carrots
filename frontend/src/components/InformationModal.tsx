import React from 'react';

import text from '../pages/text.json';

export default function InformationModal() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button
        className='text-lg text-center text-white underline'
        type='button'
        onClick={
          () => setIsOpen(true)
        }
      >
        Learn more
      </button>

      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center'>
          <div className='absolute inset-0'>
            { /* This is the modal content */ }
            <div className='relative bg-zinc-800/70 backdrop-blur-md text-zinc-300 rounded-md h-screen overflow-y-scroll'>
              <div className='flex flex-col items-center justify-center gap-4 p-8'>
                <button
                  className='sticky top-10 ml-auto px-4 py-2 text-lg font-semibold text-white bg-purple-600 rounded-md'
                  type='button'
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
                <h2 className='text-2xl font-semibold'>Welcome to Cosmic Carrots</h2>
                <p className='text-lg font-light text-center'>
                  {
                    text.info.gameIdeaRows.map((row: string, index) => (
                      <div className='py-4 max-w-[750px]' key={index as number}>
                        {row}
                      </div>
                    ))
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
