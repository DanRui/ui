import React from 'react';

interface ElfProps {
  color?: string;
  size?: string | number;
}

const Elf = (props: ElfProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm10-16.038c.001-2.316-1.791-4.135-4.09-4.15-2.252-.015-4.11 1.849-4.122 4.135-.012 2.287 1.826 4.16 4.09 4.166 2.312.007 4.121-1.815 4.122-4.15zM9.09 23.92c.923.004 1.735-.319 2.287-1.054.344-.457.548-1.038.74-1.59.352-1.012.822-1.898 1.892-2.287.598-.217 1.182-.027 1.77.076.666.116 1.198-.232 1.375-.88a1.178 1.178 0 00-.67-1.402c-.586-.252-1.246-.031-1.537.563-.286.584-.737.983-1.267 1.312-.365.227-.76.322-1.173.186-.665-.218-1.318-.477-1.986-.686-.47-.147-.954-.327-1.436-.338-1.677-.039-3.01 1.34-3.016 3.046A3.019 3.019 0 009.09 23.92zM9.026 8.082c-2.224 0-3.684 2.34-2.728 4.37a3.018 3.018 0 004.234 1.358c.402-.223.803-.462 1.23-.623 1.23-.462 2.135-.192 2.95.838.12.15.22.317.327.477.3.447.853.654 1.342.502.553-.173.857-.603.844-1.194-.019-.852-.81-1.38-1.633-1.08-.928.339-2.391.218-2.974-1.023-.235-.5-.512-.987-.696-1.508-.464-1.316-1.529-2.117-2.896-2.117zm9.53 15.908c.013-1.122-.849-2.052-1.977-2.041-1.179.011-2.027.95-1.997 2.104.026 1.02.906 1.927 1.96 1.947 1.089.02 2.002-.891 2.015-2.01zM14.594 8.02c-.052.978.701 2.009 1.98 2.033 1.124.021 1.978-.894 1.986-2.035.009-1.085-.893-2.008-1.971-2.018-1.109-.01-1.996.888-1.995 2.02z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Elf;
