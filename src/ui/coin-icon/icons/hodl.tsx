import React from 'react';

interface HodlProps {
  color?: string;
  size?: string | number;
}

const Hodl = (props: HodlProps) => {
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
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM7.973 16.453c-.518.412-.98 1.144-.957 2.263.017.774.433 1.304.957 1.664v1.383c0 .863.42 1.672 1.128 2.167l4.853 3.319V10.29l-5.981 1.75v4.413zm1.303-.408c1.007.737 1.007 5.116 1.007 5.116s-1.139-.11-2.08-.636c.776.261 1.399.203 1.67.233l.018.001h.004l.014.002.038.003.013.002h.013s.16-3.822-.997-4.492c-.188-.065-.52-.027-.886.09.466-.314.953-.42 1.186-.319zm5.097 6.904v4.306h3.263V22.95h-3.263zm-.74-12.98l.29.29-5.08-5.1a.51.51 0 00-.87.361v6.07l5.66-1.62zm.74 6.071v6.494h3.263V16.04h-3.262zm3.993-6.07l5.661 1.62V5.52a.51.51 0 00-.87-.36l-5 5.02.21-.21zm-3.992.321v5.33h3.262v-5.33h-3.262zm9.653 6.162V12.04l-5.971-1.746v16.961l4.843-3.325a2.647 2.647 0 001.128-2.167V20.38c.524-.36.94-.89.957-1.664.024-1.119-.439-1.851-.957-2.263zm-1.96 4.374h.013l.012-.001.017-.002h.004l.035-.003h.002l.016-.002.149-.017h.007c.326-.042.726-.038 1.34-.23l.136-.045c-.942.526-2.08.636-2.08.636s0-4.378 1.007-5.115c.233-.102.72.004 1.185.32-.366-.117-.697-.155-.886-.09-1.157.669-.958 4.55-.958 4.55z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Hodl;
