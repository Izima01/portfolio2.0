
import React, { useState, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = ""
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (imgRef.current) {
            observer.unobserve(imgRef.current);
          }
        }
      },
      { 
        rootMargin: '200px', // Load images 200px before they come into view
        threshold: 0.01 
      }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      className={`relative ${className}`} 
      style={{ 
        width: '100%', 
        height: 'auto',
        aspectRatio: `${width} / ${height}`
      }}
      ref={imgRef}
    >
      {isInView ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity duration-300 w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      ) : (
        <div 
          className="w-full h-full bg-secondary/20 animate-pulse rounded" 
          style={{ aspectRatio: `${width} / ${height}` }}
        />
      )}
    </div>
  );
};
