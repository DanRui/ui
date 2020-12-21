import React from 'react';

interface EthProps {
  color?: string;
  size?: string | number;
}

const Eth = (props: EthProps) => {
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
      <g fill="currentColor" fillRule="evenodd">
        <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z" />
        <g fillRule="nonzero">
          <path d="M16.498 4v8.87l7.497 3.35z" fillOpacity=".5" />
          <path opacity=".8" d="M16.498 4L9 16.22l7.498-3.35z" />
          <path d="M16.498 21.968v6.027L24 17.616z" fillOpacity=".5" />
          <path opacity=".796" d="M16.498 27.995v-6.028L9 17.616z" />
          <path d="M9 16.22l7.498 4.353v-7.701z" fillOpacity=".5" />
        </g>
      </g>
    </svg>
  );
};

export default Eth;
