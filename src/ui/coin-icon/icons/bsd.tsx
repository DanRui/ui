import React from 'react';

interface BsdProps {
  color?: string;
  size?: string | number;
}

const Bsd = (props: BsdProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm12-16.873L19.927 4l-1.963 6.436L4 15.127h24zM4.11 16.655l7.854 11.236 1.963-6.655 13.964-4.581H4.109z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Bsd;
