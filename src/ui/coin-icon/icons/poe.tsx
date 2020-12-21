import React from 'react';

interface PoeProps {
  color?: string;
  size?: string | number;
}

const Poe = (props: PoeProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm8.758-24.268A4.283 4.283 0 0021.742 6.5c-1.145 0-2.211.44-3.016 1.232L8.87 17.438a.5.5 0 00-.145.382v4.996L6 25.5h1.503l2.018-1.987h5.044a.51.51 0 00.378-.162l9.806-9.658.01-.01A4.162 4.162 0 0026 10.724a4.171 4.171 0 00-1.242-2.99zM19.026 8.86l.417-.41a3.253 3.253 0 012.299-.936c.863 0 1.678.334 2.299.936.01.01.02.028.039.038.591.602.911 1.385.911 2.226 0 .85-.34 1.652-.95 2.264l-.427.42h-3.812l2.503-2.465a.514.514 0 00.019-.716c-.01-.01-.01-.02-.02-.029a.539.539 0 00-.746 0l-2.522 2.484V8.859zM10.55 22.501l2.056-2.026h3.812l-2.056 2.026zm5.984-5.904l2.435-2.398h3.812l-2.435 2.398zm2.978.822l-2.27 2.235H13.43l2.27-2.235zm-3.753-5.34l2.444-2.408v3.802l-2.444 2.417zm-3.104 3.056l2.27-2.235v3.802l-2.27 2.235zm-2.91 2.866l2.085-2.044v3.802l-2.085 2.044z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Poe;
