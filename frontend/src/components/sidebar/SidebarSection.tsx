import React from 'react';
import { formatNumber } from '../../utils';
import SidebarItem from './SidebarItem';

interface ResearchSectionProps {
  sectionTitle: string;
  statTitle?: string;
  divider?: boolean;
  children: React.ReactNode;
}

function SidebarSection({
  sectionTitle,
  statTitle = '',
  divider = false,
  children,
}: ResearchSectionProps) {
  return (
    <div className='flex flex-col items-center gap-2 py-6'>
      <div className='flex flex-row justify-between items-center w-full h-10 w-48'>
        <h1 className='text-orange-200 font-medium'>{sectionTitle}</h1>
        {statTitle && <span className='text-orange-200 font-medium'>{statTitle}</span>}
      </div>
      {children && children}
      {divider && <div className='h-0.5 w-1/2 bg-slate-700 mx-auto mt-6' />}
    </div>
  );
}

export function ResearchSection() {
  return (
    <SidebarSection sectionTitle='Research stats' statTitle='Level' divider>
      <SidebarItem label='Machinery' value='8/10' progressBar={{ value: 8, max: 10 }} />
      <SidebarItem label='Military' value='2/10' progressBar={{ value: 8, max: 10 }} />
      <SidebarItem label='Astronomy' value='2/10' progressBar={{ value: 8, max: 10 }} />
      <SidebarItem label='Braincells' value={String(formatNumber(86000000000))} progressBar={{ value: 86000000000, max: 86000000000 }} />
    </SidebarSection>
  );
}

export function EconomySection() {
  return (
    <SidebarSection sectionTitle='Economy stats' divider>
      <SidebarItem label='Gold' value={`${String(formatNumber(1245))}$`} />
      <SidebarItem label='Net' value='$2/t' />
      <SidebarItem label='Income' value='$3/t' />
      <SidebarItem label='Expenses' value='$1/t' />
    </SidebarSection>
  );
}
