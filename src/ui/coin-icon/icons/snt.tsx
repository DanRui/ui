import React from 'react';

interface SntProps {
  color?: string;
  size?: string | number;
}

const Snt = (props: SntProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.7-16.98c2.25 0 3.315.435 5.564.435 3.047 0 5.136-1.244 5.136-3.819 0-2.574-1.74-3.818-4.28-3.818-4.148 0-7.632 3.165-8.084 7.346a9.144 9.144 0 011.664-.143zm-.164 1.525C10.089 16.545 8 17.79 8 20.364s1.74 3.818 4.28 3.818c4.148 0 7.632-3.165 8.084-7.346a9.144 9.144 0 01-1.664.144c-2.25 0-3.315-.435-5.564-.435z"
      />
    </svg>
  );
};

export default Snt;
