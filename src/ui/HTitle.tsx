import React, { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export const H1 = ({ children, className = '' }: HeadingProps) => (
  <h1 className={`text-h1 font-bold text-gray-900 mb-6 ${className}`}>
    {children}
  </h1>
);

export const H2 = ({ children, className = '' }: HeadingProps) => (
  <h2 className={`text-h2 font-bold text-gray-800 mb-5 ${className}`}>
    {children}
  </h2>
);

export const H3 = ({ children, className = '' }: HeadingProps) => (
  <h3 className={`text-h3 font-semibold text-gray-700 mb-4 ${className}`}>
    {children}
  </h3>
);

export const H4 = ({ children, className = '' }: HeadingProps) => (
  <h4 className={`text-h4 font-semibold text-gray-600 mb-3 ${className}`}>
    {children}
  </h4>
);

export const H5 = ({ children, className = '' }: HeadingProps) => (
  <h5 className={`text-h5 font-medium text-gray-600 mb-2 ${className}`}>
    {children}
  </h5>
);

export const H6 = ({ children, className = '' }: HeadingProps) => (
  <h6 className={`text-h6 font-medium text-gray-500 mb-2 ${className}`}>
    {children}
  </h6>
);
