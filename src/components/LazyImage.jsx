import { useEffect, useRef, useState } from 'react';

const LazyImage = ({ src, alt, className, fallbackSrc }) => {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(imgRef.current); // Stop observing once loaded
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the image is visible
        );

        if (imgRef.current) observer.observe(imgRef.current);

        return () => observer.disconnect(); // Cleanup
    }, []);

    return (
        <>
        <img
            ref={imgRef}
            src={isVisible ? src : fallbackSrc}
            alt={alt}
            className={className}
            loading="lazy"  // Additional browser optimization
        />
        </>
    );
};

export default LazyImage;
