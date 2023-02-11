import React, { useEffect } from 'react';

export default function HoverButton({
  buttonContent,
  hoverTitle,
  hoverContent,
  onClick,
  disabled = false,
}: {
  buttonContent: React.ReactNode;
  hoverTitle: string;
  hoverContent: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  const [hovered, setHovered] = React.useState(false);

  useEffect(() => {
    if (disabled) {
      setHovered(false);
    }
  }, [disabled]);

  return (
    <div className='flex'>
      <button
        className='bg-gradient-to-r w-full from-[#ff4e50] to-[#f9d423] text-white font-bold py-2 px-4 rounded-full disabled:opacity-50'
        type='button'
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        disabled={disabled}
      >
        {buttonContent}
      </button>
      {hovered && (
        <div className='relative'>
          <div className='absolute inset-0 left-4 top-0 w-max max-w-[250px] h-fit bg-white text-white rounded-lg p-2'>
            <h1 className='text-md font-medium text-zinc-800 pb-2'>{hoverTitle}</h1>
            <p className='text-sm font-light text-zinc-800'>
              {hoverContent}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
