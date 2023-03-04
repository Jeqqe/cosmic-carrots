import React from 'react';

// Sidebar
import { EconomySection, ResearchSection } from './sidebar/SidebarSection';
import SidebarFooterButtons from './sidebar/SidebarFooterButtons';
import SidebarHeader from './sidebar/SidebarHeader';

export default function Sidebar() {
  const [username, setUsername] = React.useState('Farmer');

  return (
    <div className='basis-1/4 h-full py-4'>
      <SidebarHeader username={username} setUsername={setUsername} />
      <EconomySection />
      <ResearchSection />
      <SidebarFooterButtons />
    </div>
  );
}
