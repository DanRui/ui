import React from 'react';

interface SphtxProps {
  color?: string;
  size?: string | number;
}

const Sphtx = (props: SphtxProps) => {
  const { color = 'currentColor', size = '24', ...otherProps } = props;
  return (
    <svg
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      viewBox="0 0 33 32"
    >
      <path
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6 12.391h8.417v-.356H6zm0-1.035h8.417V11H6zm3.55 10.64h.338v-8.893H9.55zm.98 0h.337v-8.893h-.337zm15.232-.728l.238-.252-3.798-4.012-.238.251zM16.519 11l-.238.252 3.798 4.012.238-.251zm8.55 11l.238-.252-3.798-4.013-.238.252zm-9.242-10.268l-.239.252 3.798 4.012.239-.252zm5.421 4.768l-.454.48-.238.252-4.275 4.516.238.252 4.275-4.516.239-.252.454-.48.238-.252L26 11.984l-.238-.252-4.275 4.516zm-.454-.984l-.238.252-.455.48-.238.252-4.275 4.516.239.252 4.274-4.516.239-.252.454-.48.238-.252 4.275-4.516L25.07 11z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Sphtx;
