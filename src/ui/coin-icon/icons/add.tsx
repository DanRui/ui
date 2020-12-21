import React from 'react';

interface AddProps {
  color?: string;
  size?: string | number;
}

const Add = (props: AddProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.984-14.369h-4.928l-.88-2.64h5.8a.748.748 0 100-1.496H18.7l-2.517-7.673a1.074 1.074 0 00-2.12-.07l-6.02 18.303c-.016.1-.016.2 0 .3a1.012 1.012 0 001.989.246l5.051-15.4 1.443 4.294h-1.25a.748.748 0 100 1.496h1.76l.88 2.64h-2.64a.748.748 0 100 1.496h3.16l1.425 4.224h-7.559a1.056 1.056 0 100 2.112h8.941c.554 0 1.003-.449 1.003-1.003a1.03 1.03 0 00-.097-.44l-1.61-4.893h4.4a.748.748 0 100-1.496h.044z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Add;
