import React from 'react';

interface LtcProps {
  color?: string;
  size?: string | number;
}

const Ltc = (props: LtcProps) => {
  const { color = 'currentColor', size = '24', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 33 32"
      fill={color}
      {...otherProps}
    >
      <path
        fill="currentColor"
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.573-12.786L9.252 24h12.875L23 20.429h-7.722l.848-3.483 1.427-.571.68-2.75-1.41.571L18.342 8h-5.129l-2.081 8.429-1.444.58L9 19.768l1.427-.554z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Ltc;
