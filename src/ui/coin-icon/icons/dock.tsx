import React from 'react';

interface DockProps {
  color?: string;
  size?: string | number;
}

const Dock = (props: DockProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.069-21.229v-.004A8 8 0 1023 18.87l-.001-.067V6.142a1.143 1.143 0 00-2.286 0v12.576a5.695 5.695 0 11-4.705-5.63l-1.707 1.707a1.143 1.143 0 001.616 1.616l3.64-3.636a1.143 1.143 0 000-1.617l-3.636-3.636-.038-.038a1.144 1.144 0 10-1.582 1.654l1.63 1.633z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Dock;
