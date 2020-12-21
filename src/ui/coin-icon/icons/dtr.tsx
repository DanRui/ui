import React from 'react';

interface DtrProps {
  color?: string;
  size?: string | number;
}

const Dtr = (props: DtrProps) => {
  const { color = 'currentColor', size = '24', ...otherProps } = props;
  return (
    <svg
      height={size}
      viewBox="0 0 33 32"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
    >
      <g fill="currentColor" fillRule="evenodd">
        <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm2.032-9.13V9.08c0-1.146-.92-2.075-2.056-2.075s-2.055.929-2.055 2.075v13.79c0 1.145.92 2.074 2.055 2.074s2.056-.929 2.056-2.075zm-6.92.005v-3.1a2.072 2.072 0 00-1.015-1.82 2.032 2.032 0 00-2.068 0 2.072 2.072 0 00-1.014 1.82v3.1a2.072 2.072 0 001.014 1.82c.639.376 1.43.376 2.068 0a2.072 2.072 0 001.014-1.82zM24.955 17.4v-5.233c0-1.146-.92-2.075-2.056-2.075s-2.056.929-2.056 2.075V17.4c0 1.146.92 2.075 2.056 2.075s2.056-.93 2.056-2.075z" />
        <path
          d="M24.956 17.4c0 1.145-.92 2.074-2.056 2.074s-2.056-.93-2.056-2.075v-5.233c0-1.146.92-2.075 2.056-2.075s2.056.929 2.056 2.075z"
          opacity=".5"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default Dtr;
