import React from 'react';

interface AutoProps {
  color?: string;
  size?: string | number;
}

const Auto = (props: AutoProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.5-12.733v-8.2L16 6l-8.5 5.067v9.955L16 26l7.015-4.108-7.538-4.47 1.365-.755v-7.9l5.74 3.422v3.633l-1.787-1.055-.48 1.989 4.185 2.511zM9.418 12.19l5.518-3.29v6.568l-5.518 3.2V12.19zm4.097 6.344l5.66 3.353L16 23.745l-5.623-3.293 3.138-1.919z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Auto;
