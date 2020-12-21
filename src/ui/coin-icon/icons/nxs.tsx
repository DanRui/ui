import React from 'react';

interface NxsProps {
  color?: string;
  size?: string | number;
}

const Nxs = (props: NxsProps) => {
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
        d="M10.618 31.072c3.323-.561 7.186-2.1 10.933-4.533 5.432-3.528 9.244-8.042 10.398-11.82.034.422.051.85.051 1.281 0 8.837-7.163 16-16 16-1.888 0-3.7-.327-5.382-.928zM2.005 23.76A15.928 15.928 0 010 16C0 7.163 7.163 0 16 0c6.12 0 11.437 3.435 14.128 8.483-3.574-2.143-10.902-.705-17.836 3.798a34.973 34.973 0 00-4.105 3.11A2 2 0 005.4 18.2c-1.623 1.885-2.789 3.795-3.394 5.56zm3.75-5.195a2 2 0 002.881-2.716c.54-.423 1.114-.833 1.717-1.225 5.442-3.534 11.245-4.256 12.962-1.613 1.716 2.643-1.304 7.65-6.746 11.185-5.442 3.534-11.245 4.256-12.961 1.613-1.136-1.75-.197-4.536 2.146-7.244z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Nxs;
