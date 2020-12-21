import React from 'react';

interface TelProps {
  color?: string;
  size?: string | number;
}

const Tel = (props: TelProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.08-20.522L19.026 6.56c-.633-.512-1.78-.71-2.553-.438l-7.42 2.606c-.772.27-1.522 1.134-1.664 1.918l-1.36 7.524c-.143.784.257 1.84.89 2.353l6.058 4.917c.632.513 1.78.71 2.552.438l7.419-2.605c.772-.27 1.522-1.134 1.664-1.918l1.36-7.524c.14-.779-.26-1.84-.892-2.353zm-6.311 3.378l-2.83-.004-.526 2.662c-.165.825-.21 1.29.64 1.29h1.914l-.4 1.69h-2.288c-1.353 0-2.233-1.263-1.881-3.042.14-.699.56-2.593.56-2.593h-1.239l.257-1.319a5.759 5.759 0 002.748-2.225h.915l-.4 2.016 2.832-.004z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Tel;
