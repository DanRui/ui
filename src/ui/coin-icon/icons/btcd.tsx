import React from 'react';

interface BtcdProps {
  color?: string;
  size?: string | number;
}

const Btcd = (props: BtcdProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.078-12.644c.908 1.422 1.345 4.4 1.268 5.467C30.31 20.71 26.562 7.567 18.586 7c0 2.945-.678 5.322-1.508 5.322 3.267.2 5.08 5.467 0 7.034zM6 17.8c5.954 0 10.773-4.823 10.773-10.79h-5.561c.01 2.923-2.317 5.312-5.201 5.323H6V17.8zm7.287-.99c-1.507 1.357-2.349 2.057-6.478 2.723 2.436 0 4.403 2.445 4.403 5.467h5.56c0-.911-.185-5.478-3.485-8.19z"
      />
    </svg>
  );
};

export default Btcd;
