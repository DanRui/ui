import React from 'react';

interface ActProps {
  color?: string;
  size?: string | number;
}

const Act = (props: ActProps) => {
  const { color = 'currentColor', size = '24', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      {...otherProps}
      viewBox="0 0 33 32"
    >
      <path
        fill="currentColor"
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM13.77 6.5a.87.87 0 00-.759.444L6.105 19.263a.87.87 0 000 .85l2.21 3.942a.87.87 0 00.758.445h13.854a.87.87 0 00.759-.445l2.209-3.942a.87.87 0 000-.85L18.989 6.944a.87.87 0 00-.759-.444h-4.46zM16 11.401l4.653 8.287h-9.306L16 11.401z"
      />
    </svg>
  );
};

export default Act;
