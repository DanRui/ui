import React from 'react';

interface IcxProps {
  color?: string;
  size?: string | number;
}

const Icx = (props: IcxProps) => {
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
        d="M11.296 22.472a8 8 0 0011.176-11.176l-2.164 2.164a5 5 0 01-6.848 6.848zm-1.768-1.768l2.164-2.164a5 5 0 016.848-6.848l2.164-2.164A8 8 0 009.528 20.704zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8-22a2 2 0 100-4 2 2 0 000 4zM8 26a2 2 0 100-4 2 2 0 000 4z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Icx;
