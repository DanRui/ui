import React from 'react';

interface OngProps {
  color?: string;
  size?: string | number;
}

const Ong = (props: OngProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.057-5.689c5.74 0 10.088-3.846 10.99-8.878h-4.897c-.732 2.672-3.004 4.628-6.035 4.628-3.009 0-5.31-1.97-6.073-4.628H5c.869 5.05 5.18 8.878 10.943 8.878zm.028-16.257a2.527 2.527 0 100-5.054 2.527 2.527 0 000 5.054zm-6.316 7.38h12.63c-.006-3.594-2.633-6.577-6.345-6.577-3.711 0-6.285 2.933-6.285 6.525v.051z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Ong;
