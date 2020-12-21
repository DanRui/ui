import React from 'react';

interface LunProps {
  color?: string;
  size?: string | number;
}

const Lun = (props: LunProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.187-25.952v.002l-8.216 4.63a.358.358 0 000 .628l7.156 4.018c.247-.281.586-.47.96-.536v-2.198c-.77-.134-1.354-.788-1.354-1.576 0-.885.736-1.603 1.645-1.603s1.645.718 1.645 1.603c0 .793-.59 1.45-1.366 1.578v2.193c.378.064.723.254.973.54l7.155-4.034a.36.36 0 00.185-.314.36.36 0 00-.186-.314l-8.225-4.618a.381.381 0 00-.372 0zm8.62 5.819l.002-.001-6.908 3.894c.155.365.164.774.026 1.145l1.95 1.093c.26-.37.667-.615 1.121-.677.9-.124 1.732.487 1.859 1.363s-.5 1.688-1.4 1.812c-.9.123-1.732-.487-1.858-1.364a1.56 1.56 0 01.037-.628l-1.99-1.115c-.25.294-.6.49-.987.555l.007 7.693c0 .28.31.454.557.314l7.965-4.49a.36.36 0 00.186-.314l-.008-8.967a.36.36 0 00-.187-.314.379.379 0 00-.371 0zm-17.425.313L7 21.146c0 .13.07.25.186.314l7.966 4.49c.247.14.558-.034.558-.313l.006-7.695a1.654 1.654 0 01-.977-.554l-1.99 1.115c.056.205.068.42.038.629-.127.876-.96 1.487-1.859 1.363s-1.526-.935-1.4-1.811c.128-.876.96-1.487 1.86-1.363.454.062.86.308 1.121.677l1.949-1.092c-.138-.37-.13-.777.023-1.141l-6.915-3.898a.375.375 0 00-.186-.05.368.368 0 00-.372.363z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Lun;
