import React from 'react';

interface LrcProps {
  color?: string;
  size?: string | number;
}

const Lrc = (props: LrcProps) => {
  const { color = 'currentColor', size = '24', ...otherProps } = props;
  return (
    <svg
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      viewBox="0 0 33 32"
    >
      <path
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-26L7 18.533 16 26l9-7.467zm-1.174 6.667V21.2L10.913 18zm2.348 0L21.087 18l-3.913 3.2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Lrc;
