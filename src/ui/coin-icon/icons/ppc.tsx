import React from 'react';

interface PpcProps {
  color?: string;
  size?: string | number;
}

const Ppc = (props: PpcProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM9 7.5v9.209c0 5.05 3.75 9.433 8.883 8.626 3.015-4.42.406-11.267-6.06-15.115 8.127 3.359 9.788 9.44 8.911 14.493-.047.266-.109.527-.169.787 1.482-1.028 2.187-2.014 2.85-3.817C25.756 15.206 21.093 7.947 9 7.5z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Ppc;
