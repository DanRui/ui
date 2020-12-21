import React from 'react';

interface UsdcProps {
  color?: string;
  size?: string | number;
}

const Usdc = (props: UsdcProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.25-4.5A11.75 11.75 0 0027.5 15.75C27.5 9.26 22.24 4 15.75 4S4 9.26 4 15.75 9.26 27.5 15.75 27.5zm-.7-16.11v-.74a.705.705 0 011.41 0v.69a2.65 2.65 0 012.38 2 .42.42 0 01-.31.5h-.47a.8.8 0 01-.72-.46 1.64 1.64 0 00-1.59-.81c-1 0-1.6.62-1.6 1.18 0 .56.47.89 1.47 1.14l1 .22c1.73.37 2.46 1.1 2.46 2.37a2.62 2.62 0 01-2.59 2.58v.85a.705.705 0 01-1.41 0v-.84a2.73 2.73 0 01-2.61-2.08.35.35 0 01.28-.41h.59a.68.68 0 01.61.39 1.9 1.9 0 001.8.91c1 0 1.77-.6 1.77-1.21s-.44-.97-1.51-1.22l-1.1-.26c-1.57-.33-2.31-1.12-2.31-2.33a2.58 2.58 0 012.45-2.47zm-8.11 4.36a8.79 8.79 0 016.03-8.34.42.42 0 01.56.4v.23a.93.93 0 01-.58.86 7.36 7.36 0 000 13.65.94.94 0 01.58.87v.21a.45.45 0 01-.45.45h-.14a8.79 8.79 0 01-6-8.33zm17.62 0a8.79 8.79 0 01-5.99 8.34.47.47 0 01-.62-.44v-.17a1 1 0 01.6-.89 7.36 7.36 0 000-13.64 1 1 0 01-.61-.9V7.9c0-.26.21-.47.47-.47h.15a8.79 8.79 0 016 8.32z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Usdc;
