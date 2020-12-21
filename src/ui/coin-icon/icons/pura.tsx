import React from 'react';

interface PuraProps {
  color?: string;
  size?: string | number;
}

const Pura = (props: PuraProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM11.192 8c.245 1.016.744 2.109 1.854 2.42 2.444.51 5.071-.33 7.45.593 2.33.973 2.246 4.832-.066 5.776-1.576.64-3.32.387-4.98.43-1.1.04-2.382-.202-3.287.576-.773.586-.92 1.595-.883 2.496.058 3.26.216 4.709.216 4.709s1.715-.644 2.089-1.183c.93-1.128.557-2.68.63-4.015 2.708-.115 5.658.442 8.124-.969 2.674-1.49 3.264-5.162 2.077-7.773-.949-2.05-3.312-2.933-5.46-3.06h-7.764zM7 12.43v.62c.363 1.124 1.29 2.144 2.546 2.217 2.045.09 4.094.014 6.138.025-.154-1.364-1.121-2.698-2.594-2.81-2.026-.123-4.06-.015-6.09-.051z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Pura;
