import React from 'react';

export const Container = ({ children, className = '', maxWidth = 'content' }) => {
  const maxWidths = {
    content: 'max-w-content',
    text: 'max-w-text',
    full: 'max-w-full',
  };

  return (
    <div className={`${maxWidths[maxWidth]} mx-auto px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
};
