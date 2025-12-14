"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

const FALLBACK_IMAGE = "/images/project-placeholder.svg";

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  className = "",
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          <svg
            className="w-12 h-12 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}
      <Image
        src={imgSrc}
        alt={alt}
        width={1350}
        height={800}
        className={`w-full h-full object-cover transition-all duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImgSrc(FALLBACK_IMAGE);
          setIsLoading(false);
        }}
      />
    </div>
  );
};
