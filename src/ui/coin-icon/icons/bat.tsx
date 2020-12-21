import React from 'react';

interface BatProps {
  color?: string;
  size?: string | number;
}

const Bat = (props: BatProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6 23.5l20-.023L16.051 6.5 6 23.5zm10.027-10.12l4.127 6.786H11.92l4.108-6.786z"
      />
    </svg>
  );
};

export default Bat;
