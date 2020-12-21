import React from 'react';

interface EdogeProps {
  color?: string;
  size?: string | number;
}

const Edoge = (props: EdogeProps) => {
  const { color = 'currentColor', size = '24', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      {...otherProps}
      viewBox="0 0 33 32"
    >
      <path
        fill="currentColor"
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM9.471 9.016c-.508 0-1.04-.046-1.502.18-.243.374-.3.906-.011 1.28.277.249.681.249 1.04.26 1.606 0 3.212-.011 4.819 0-.046 1.392 0 2.796-.023 4.2-1.433 0-2.878-.012-4.31 0-.37 0-.81.068-.972.441-.127.34-.127.781.162 1.041.243.204.59.204.902.216 1.41 0 2.808-.012 4.218 0 0 1.528-.023 3.067.011 4.606-1.826.034-3.663-.022-5.49.034-.773-.045-1.062.997-.577 1.483.277.25.682.215 1.04.238 3.282 0 6.553.011 9.835 0 1.687-.011 3.467-.43 4.738-1.573 1.433-1.246 2.057-3.158 2.138-4.98.081-1.835-.277-3.804-1.502-5.264-1.04-1.257-2.647-1.913-4.253-2.083-1.607-.147-2.677-.08-4.83-.08H9.47zm6.334 5.92v-3.611c.011-.204.023-.487.254-.555.728-.068 1.4-.045 2.184-.045 1.375-.08 2.855.26 3.837 1.256 1.086 1.11 1.364 2.74 1.329 4.222-.023 1.336-.37 2.74-1.318 3.747-.924.962-2.31 1.37-3.628 1.313-.887 0-1.572.023-2.358-.045-.289-.023-.3-.362-.312-.589 0-1.335.012-2.66 0-3.995.659-.012 1.33.056 1.976-.046.798-.113.798-1.494.012-1.607-.659-.09-1.318-.034-1.976-.045z"
      />
    </svg>
  );
};

export default Edoge;
