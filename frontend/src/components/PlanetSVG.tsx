import React from 'react';

type Props = {
  stroke?: string;
  fill?: string;
  size?: string;
};

export default function PlanetSVG({
  stroke = 'stroke-zinc-500',
  fill = 'fill-zinc-500',
  size = 'w-16 h-16',
}: Props) {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
    >
      <path className={`${stroke} ${size}`} strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M18 7.96c2.59-.125 4.379.274 4.625 1.193.429 1.6-3.98 4.172-9.849 5.745-5.868 1.572-10.972 1.55-11.401-.051-.254-.948 1.188-2.236 3.625-3.455' />
      <path className={`${fill} ${size}`} fillRule='evenodd' d='M4 12a8 8 0 1 1 15.985.491c-1.653.879-3.904 1.754-6.467 2.44-2.874.77-5.526 1.14-7.478 1.131a12.275 12.275 0 0 1-.956-.039A7.963 7.963 0 0 1 4 12zm2.766 6.05a8.003 8.003 0 0 0 12.658-3.065c-1.561.697-3.4 1.346-5.389 1.879-2.668.715-5.208 1.115-7.269 1.186z' clipRule='evenodd' />
    </svg>
  );
}
