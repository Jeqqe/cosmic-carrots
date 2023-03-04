import React from 'react';

interface SidebarItemProps {
  label: string;
  value: string;
  progressBar?: {
    value: number;
    max: number;
  } | null;
}

export default function SidebarItem({
  label,
  value,
  progressBar = null,
}: SidebarItemProps) {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-between items-center w-full h-10 w-48 text-orange-300'>
        <span>{label}</span>
        <span>{value}</span>
      </div>
      {progressBar && (
        <div className='w-48 h-1 bg-slate-700 rounded-full mb-2'>
          <div className='h-full bg-orange-300 rounded-full' style={{ width: `${(progressBar.value / progressBar.max) * 100}%` }} />
        </div>
      )}
    </div>
  );
}
