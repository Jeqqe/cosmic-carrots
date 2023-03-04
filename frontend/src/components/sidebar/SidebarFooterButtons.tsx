import React from 'react';
import {
  BanknotesIcon, ClipboardDocumentListIcon, CodeBracketIcon, AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/solid';

import SidebarSettingButton from './SidebarSettingButton';

export default function SidebarFooterButtons() {
  return (
    <div className='flex flex-row justify-center gap-2'>
      <SidebarSettingButton label='Donate' icon={<BanknotesIcon />} onClick={() => console.log('clicked')} />
      <SidebarSettingButton label='Change Log' icon={<ClipboardDocumentListIcon />} onClick={() => console.log('clicked')} />
      <SidebarSettingButton label='Source' icon={<CodeBracketIcon />} onClick={() => console.log('clicked')} />
      <SidebarSettingButton label='Settings' icon={<AdjustmentsHorizontalIcon />} onClick={() => console.log('clicked')} />
    </div>
  );
}
