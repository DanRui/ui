import React from 'react';

interface WanProps {
  color?: string;
  size?: string | number;
}

const Wan = (props: WanProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM7 11.09v11.974l9-5.315 9 5.315V11.09l-2.606 1.13v6.353L16 14.786l-6.333 3.787V12.22L7 11.09zm.303-.489l2.364.978L16 7.883l6.394 3.696 2.364-.978L16 5.5l-8.697 5.101zm1.879 11.821L16.03 26.5l6.849-4.078-2.03-1.13-4.819 2.825-4.878-2.825-1.97 1.13z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Wan;
