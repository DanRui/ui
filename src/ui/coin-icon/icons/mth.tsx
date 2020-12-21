import React from 'react';

interface MthProps {
  color?: string;
  size?: string | number;
}

const Mth = (props: MthProps) => {
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
      <g fill="currentColor">
        <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9-12.101V9.559c-2.025-1.133-4.615-.46-5.784 1.5l-3.219 5.4-3.213-5.39C11.615 9.107 9.025 8.435 7 9.568v10.33C7 22.165 8.896 24 11.234 24v-7.33l1.23 2.063c.505.74.977 1.166 1.416 1.277l.22.123a4.33 4.33 0 001.9.435 4.267 4.267 0 003.536-1.844l1.229-2.06V24c2.339 0 4.234-1.836 4.234-4.101z" />
        <path
          d="M7 9.568l4.234 7.103V24C8.896 24 7 22.164 7 19.899z"
          fillOpacity=".5"
        />
        <path
          d="M20.765 16.663l4.232-7.099h.002V19.9C25 22.164 23.104 24 20.765 24z"
          fillOpacity=".6"
        />
        <path
          d="M15.997 16.458L13.88 20.01c-.439-.11-.911-.536-1.416-1.277L7 9.568c2.025-1.133 4.615-.46 5.784 1.5z"
          fillOpacity=".805"
        />
      </g>
    </svg>
  );
};

export default Mth;
