import React from 'react';

interface WiccProps {
  color?: string;
  size?: string | number;
}

const Wicc = (props: WiccProps) => {
  const { color = 'currentColor', size = '24', ...otherProps } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 33 32"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
    >
      <path
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.76-28A12.06 12.06 0 004 15.44v1.12A12.02 12.02 0 0015.4 28h1.18a11.92 11.92 0 007.8-3.44 11.66 11.66 0 003.44-7.66l.04-1.24a.422.422 0 00-.84-.08c-.05.748-.164 1.491-.34 2.22a10.8 10.8 0 01-7.04 8A10.5 10.5 0 018.04 9.26a10.74 10.74 0 0114.8-1.72c.26.18.52.48.86.4.4-.14.4-.68.06-.9A11.584 11.584 0 0016.48 4h-1.24zM25 10.22h.02c-.54.48-.42 1.24-.32 1.88-.9 1.94-2.24 3.64-3.7 5.18l-.6.04a8.4 8.4 0 01-1.46-2.16c.24-.58.38-1.3-.04-1.84-.56-.88-2-.86-2.54.02-.36.5-.26 1.12-.1 1.66a16.954 16.954 0 01-3.46 4.94 19.14 19.14 0 01-3.14-5.28c.46-.82.2-2.02-.74-2.36-1.06-.5-2.34.58-2.08 1.7.1.82.92 1.28 1.7 1.32a18.8 18.8 0 012.92 5.2c-.24.62-.3 1.36.16 1.88.62.76 1.94.68 2.44-.14.38-.48.28-1.12.14-1.66a19.28 19.28 0 013.22-4.86l.6-.02a8.084 8.084 0 011.5 2.14c-.26.62-.4 1.4.1 1.96.68.88 2.24.66 2.6-.4.3-.54-.18-1.22.2-1.74.94-1.74 2.04-3.4 3.42-4.8 1.04.08 2.06-.82 1.8-1.88-.18-1.18-1.84-1.66-2.64-.78z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Wicc;
