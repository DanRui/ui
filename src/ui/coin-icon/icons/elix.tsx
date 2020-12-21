import React from 'react';

interface ElixProps {
  color?: string;
  size?: string | number;
}

const Elix = (props: ElixProps) => {
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
      <g fill="currentColor">
        <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.902-8.404l5.887 2.345 5.884-2.348-3.186-7.61 3.188-7.618-5.886-2.342-5.887 2.345 3.189 7.615z" />
        <path
          d="M15.985 15.984v5.306l-5.89 2.31 5.89-7.62v-5.306l5.89-2.31z"
          fillOpacity=".8"
        />
        <path
          d="M15.985 21.29v4.651l-5.89-2.344 5.89-2.315v-5.298l-5.89-7.62 5.89 2.31V6.023l5.89 2.343-5.89 2.315v5.299l5.89 7.62z"
          fillOpacity=".5"
        />
        <path
          d="M10.095 8.366l5.89-2.343v4.658zm11.78 15.231l-5.89 2.344v-4.659z"
          fillOpacity=".145"
        />
      </g>
    </svg>
  );
};

export default Elix;
