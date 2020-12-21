import React from 'react';

interface CtrProps {
  color?: string;
  size?: string | number;
}

const Ctr = (props: CtrProps) => {
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
      <path
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-5c6.075 0 11-4.925 11-11S22.075 5 16 5 5 9.925 5 16s4.925 11 11 11zm0-1.546a9.454 9.454 0 110-18.908 9.454 9.454 0 010 18.908zm.072-2.913c2.788 0 4.39-1.204 5.577-2.84l-2.627-1.868c-.755.916-1.529 1.527-2.842 1.527-1.763 0-3.004-1.473-3.004-3.36v-.036c0-1.833 1.241-3.324 3.004-3.324 1.205 0 2.033.575 2.752 1.473l2.627-2.03c-1.116-1.545-2.77-2.624-5.343-2.624-3.813 0-6.638 2.875-6.638 6.541v.036c0 3.755 2.897 6.505 6.494 6.505z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Ctr;
