import React from 'react';

interface BlcnProps {
  color?: string;
  size?: string | number;
}

const Blcn = (props: BlcnProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM7.9 7a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9V7.9a.9.9 0 00-.9-.9zm10 0a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9V7.9a.9.9 0 00-.9-.9zm0 10a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9v-6.2a.9.9 0 00-.9-.9zm-10 0a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9v-6.2a.9.9 0 00-.9-.9z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Blcn;
