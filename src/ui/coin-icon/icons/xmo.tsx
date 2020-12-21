import React from 'react';

interface XmoProps {
  color?: string;
  size?: string | number;
}

const Xmo = (props: XmoProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm12-16a11.86 11.86 0 00-2.381-7.153l-1.96 1.96A9.272 9.272 0 0125.253 16c0 5.11-4.153 9.262-9.262 9.262-5.11 0-9.263-4.153-9.263-9.262a9.22 9.22 0 011.594-5.194l-1.96-1.96A11.969 11.969 0 004 16c0 6.628 5.372 12 12 12s12-5.372 12-12zm-5.363 0a6.65 6.65 0 00-.871-3.29L16 18.474l-5.766-5.766A6.644 6.644 0 009.363 16 6.644 6.644 0 0016 22.637 6.644 6.644 0 0022.637 16zm1.21-9.075A11.925 11.925 0 0016 4c-3 0-5.747 1.097-7.847 2.925l1.866 1.866L16 14.762l7.847-7.837z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Xmo;
