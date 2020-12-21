import React from 'react';

interface XmccProps {
  color?: string;
  size?: string | number;
}

const Xmcc = (props: XmccProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.682-25h-5.16l-1.534 2.652L14.459 7H9.297L4 16.175l5.129 8.88 3.477-6.019L16 24.896l3.384-5.86 3.485 6.06L28 16.216 22.682 7zM9.122 21.544L6.02 16.178l2.467-4.272 3.1 5.37-2.466 4.273v-.005zm.384-11.402l.818-1.421h3.091l1.555 2.693-2.364 4.099-3.1-5.371zm6.48 11.232l-2.362-4.102 2.364-4.097L17.044 15l1.31 2.273-2.366 4.097-.002.005zm1.017-9.96l1.558-2.693h3.091l.828 1.42-3.12 5.372-2.357-4.1zm7.968 6.537l-2.093 3.631-2.488-4.32 3.1-5.359.836 1.44 1.653 2.863-1.008 1.745z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Xmcc;
