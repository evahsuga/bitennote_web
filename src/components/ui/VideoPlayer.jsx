import React from 'react';

export const VideoPlayer = ({ src, poster, className = '', autoPlay = true, loop = true, muted = true }) => {
  return (
    <div className={`relative rounded-2xl overflow-hidden ${className}`}>
      <video
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};
