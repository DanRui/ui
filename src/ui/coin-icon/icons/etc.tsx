import React from 'react';

interface EtcProps {
  color?: string;
  size?: string | number;
}

const Etc = (props: EtcProps) => {
  const { color = 'currentColor', size = '24', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 33 32"
      fill={color}
      {...otherProps}
    >
      <g fill="currentColor" fillRule="evenodd">
        <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.732-16L16 12.19 9.268 16 16 19.781l6.732-3.783zM16 21.047a3944.37 3944.37 0 00-7-3.952c2.079 3.248 4.66 7.26 7 10.904 2.34-3.643 4.921-7.656 7-10.904a3944.185 3944.185 0 00-7 3.952zm0-10.089l7 3.907L16 4 9 14.866l7-3.907z" />
        <path
          d="M15.989 16.553l-6.721-.577 6.72-3.802v4.379zm0 4.46v6.94C13.652 24.315 11.076 20.311 9 17.07c2.45 1.38 5.008 2.823 6.989 3.944zm0-10.068L9 14.845 15.989 4v6.945z"
          fillOpacity=".8"
          fillRule="nonzero"
        />
        <path
          d="M22.71 15.976l-6.721.577v-4.379l6.72 3.802zm-6.721 5.038c1.98-1.12 4.537-2.564 6.988-3.944-2.076 3.242-4.652 7.246-6.988 10.882v-6.938zm0-10.069V4l6.988 10.845-6.988-3.9z"
          fillOpacity=".5"
          fillRule="nonzero"
        />
        <path d="M15.988 16.553l-6.721-.577 6.721 3.775z" fillOpacity=".5" />
      </g>
    </svg>
  );
};

export default Etc;
