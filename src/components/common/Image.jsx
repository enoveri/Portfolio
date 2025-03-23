import React, { useState } from 'react';

const Image = ({ src, alt, className, fallback }) => {
  const [error, setError] = useState(false);
  
  // Default fallback if none provided
  const defaultFallback = (
    <div className={`bg-[var(--card-bg)] flex items-center justify-center text-[var(--secondary)] ${className}`}>
      <p className="text-center">{alt || 'Image'}</p>
    </div>
  );
  
  if (error) {
    return fallback || defaultFallback;
  }
  
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
};

export default Image; 