import React from 'react';

interface GoldProps {
  color?: string;
  size?: string | number;
}

const Gold = (props: GoldProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.25-28C9.26 4 4 9.26 4 15.75S9.26 27.5 15.75 27.5 27.5 22.24 27.5 15.75A11.75 11.75 0 0015.75 4zm0 20.57a8.82 8.82 0 110-17.64 8.82 8.82 0 010 17.64zm-2.93-8.81l2.94 4.4 2.92-4.4-2.92-4.41-2.94 4.41z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Gold;
