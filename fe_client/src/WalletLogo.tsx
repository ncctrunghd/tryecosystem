import React from 'react';

const defaultContainerStyles = {
  paddingTop: 2,
  display: 'flex',
  alignItems: 'center',
};

export function WalletLogo({
  size = 24,
  containerStyles = defaultContainerStyles,
}) {
  return (
    <div style={containerStyles}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="4"
          width="20"
          height="16"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 12C16 10.8954 16.8954 10 18 10H22V14H18C16.8954 14 16 13.1046 16 12Z"
          fill="currentColor"
        />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    </div>
  );
}