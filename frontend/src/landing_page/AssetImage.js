import React, { useState } from "react";

function AssetImage({ src, alt, className = "", style }) {
  const [unavailable, setUnavailable] = useState(false);
  const path = `/${src.replace(/^\/+/, "")}`;

  if (unavailable) {
    return (
      <div
        className={`asset-placeholder ${className}`}
        style={style}
        role="img"
        aria-label={`Image unavailable: ${alt}`}
      >
        <span>Image unavailable</span>
        <small>{alt}</small>
      </div>
    );
  }

  return (
    <img
      src={path}
      alt={alt}
      className={className}
      style={style}
      onError={() => setUnavailable(true)}
    />
  );
}

export default AssetImage;
