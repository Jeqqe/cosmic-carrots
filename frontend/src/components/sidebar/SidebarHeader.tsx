import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface SidebarHeaderProps {
  username: string;
  setUsername: (username: string) => void;
}

export default function SidebarHeader({
  username,
  setUsername,
}: SidebarHeaderProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [saveToken, setSaveToken] = React.useState(uuidv4);

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='w-32 h-32 rounded-full bg-zinc-800' />
      <input
        type='text'
        className='w-32 h-10 rounded-full bg-transparent text-orange-200 text-center font-medium'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <small className='text-orange-300'>{saveToken}</small>
    </div>
  );
}
