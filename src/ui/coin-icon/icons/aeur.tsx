import React from 'react';

interface AeurProps {
  color?: string;
  size?: string | number;
}

const Aeur = (props: AeurProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.048-12.014a7.144 7.144 0 00.093 0 .055.055 0 01.004.014.049.049 0 11-.097-.014zm-6.014-3.493a6.993 6.993 0 006.055 10.493 7.002 7.002 0 006.993-6.993 6.96 6.96 0 00-.94-3.503 6.993 6.993 0 10-12.11.003zM16.048 13a7.138 7.138 0 00-.097 0 .049.049 0 01.049-.05.055.055 0 01.049.05z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Aeur;
