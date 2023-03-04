import React from 'react';

interface SidebarSettingButtonProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export default function SidebarSettingButton({
  label,
  icon,
  onClick,
}: SidebarSettingButtonProps) {
  return (
    <div className='group relative'>
      <button
        type='button'
        className='flex justify-center items-center w-10 h-10 hover:bg-orange-300/25 rounded-md border border-1 border-orange-300 text-orange-300 font-medium'
        onClick={() => onClick()}
      >
        <div className='w-5 h-5'>
          {icon}
        </div>
      </button>
      <div
        className='absolute w-max -bottom-7 left-1/2 -translate-x-1/2 text-xs text-orange-300 scale-0 group-hover:scale-100'
      >
        {label}
      </div>
    </div>
  );
}
