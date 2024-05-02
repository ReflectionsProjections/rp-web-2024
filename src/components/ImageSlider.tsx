import React, { useState, useEffect } from 'react';

interface Slide {
    image: string;
}

interface ImageSliderProps {
    slides: Slide[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
    const [current, setCurrent] = useState<number>(0);
    const length: number = slides.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1));
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [length]);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="slider">
            {slides.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                        style={{ display: index === current ? 'block' : 'none' }}
                    >
                        <img
                            src={slide.image}
                            alt={`slide-${index}`}
                            className="image"
                            style={{ width: '20%', height: 'auto' }} // Set dimensions here
                        />
                    </div>
                );
            })}
        </section>
    );
};

export default ImageSlider;
