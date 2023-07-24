import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'styles/photocarousel.css';


const PhotoCarousel = () => {
    const images = [
        { src: 'https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-revuelto-122-641a1d50c5283.jpg?crop=1xw:1xh;center,top&resize=980:*', alt: 'Image 1' },
        { src: 'https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-revuelto-124-641a1d51138cd.jpg?crop=1xw:1xh;center,top&resize=980:*', alt: 'Image 2' },
        { src: 'public/image.png', alt: 'Image 3' },
        // Add more images as needed
    ];

    return (
        <Carousel
            showArrows={false} 
            showThumbs={false} 
            emulateTouch={true} 
            infiniteLoop={true} 
            transitionTime={1000} 
            selectedItem={0} 
            showStatus={false} 
            autoPlay
           interval={3000} 
        >
            {images.map((image, index) => (
                <div key={index} className="carousel-image-wrapper">
                    <img src={image.src} alt={image.alt} className="carousel-image" />
                </div>
            ))}
        </Carousel>
    );
};

export default PhotoCarousel;


