import React from 'react';

interface HtProps {
  color?: string;
  size?: string | number;
}

const Ht = (props: HtProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.347-21.467c0-3.52-1.707-6.506-2.987-7.466 0 0-.107-.107-.107.106-.106 6.72-3.52 8.534-5.333 11.094-4.373 5.653-.32 11.946 3.84 13.12 2.347.64-.533-1.174-.853-4.907-.534-4.693 5.44-8.107 5.44-11.947zm2.24 2.347c-.214.853-1.067 2.667-2.24 4.373-3.947 5.654-1.707 8.427-.427 9.92.747.854 0 0 1.813-.853.107-.107 3.627-1.92 3.947-6.08.427-4.053-2.133-6.613-3.093-7.36z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Ht;
