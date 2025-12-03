import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft , faAngleRight} from '@fortawesome/free-solid-svg-icons';

import {useEffect, useState, useRef, useMemo} from 'react'
import "../css/carouselslider.css"

export default function CarouselContainer() {
    
    const [currentIndex, setCurrentIndex] = useState(1); // Start on first "real" image 
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isHovering, setIsHovering] = useState(false); 
    const trackRef = useRef(null);
  

    const carouselImages = [
        './images/image1.jpg', 
        './images/image2.jpg',
        './images/image3.jpg',
        './images/image4.jpg',
        './images/image5.jpg',
        './images/image6.jpg',
        './images/image7.jpg',
        './images/image8.jpg'
    ];


    const slides = [carouselImages[carouselImages.length - 1], ...carouselImages, carouselImages[0]];
    const interval = 3000

      // Handle looping logic after animation ends
   useEffect(() => {
     const handleTransitionEnd = () => {
        setIsTransitioning(false);
        if (currentIndex === slides.length - 1) {
          // Moved past the last clone → jump to real first
          trackRef.current.style.transition = "none";
          setCurrentIndex(1);
        } else if (currentIndex === 0) {
          // Moved past the first clone → jump to real last
          trackRef.current.style.transition = "none";
          setCurrentIndex(slides.length - 2);
        }
    };
    const track = trackRef.current;
    track.addEventListener("transitionend", handleTransitionEnd);
    return () => track.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentIndex, slides.length]);

   const nextButtonClick = () => { 
          setIsTransitioning(true);
          setCurrentIndex((prev) => prev + 1);
     };

    const prevButtonClick = () => {  
          setIsTransitioning(true);
          setCurrentIndex((prev) => prev - 1);
        
    }; 


    // ---  Combined Autoslide/Pause Logic ---
    useEffect(() => {
      let slideInterval;
  
      const startSliding = () => {
        // Only start the timer if the tab is visible AND the mouse is not hovering
    
        if (document.visibilityState === 'visible' && !isHovering) {
          slideInterval = setInterval(nextButtonClick, interval);
        }
      };
      
      // Start sliding immediately on mount
      startSliding();
  
      // Handler to pause/resume based on tab visibility
      const handleVisibilityChange = () => {
        clearInterval(slideInterval); // Clear existing interval regardless
        if (document.visibilityState === 'visible') {
          startSliding(); // Restart only if visible
        }
      };
  
      // Add event listener for tab switching
      document.addEventListener('visibilitychange', handleVisibilityChange);
  
      // --- Cleanup ---
      return () => {
        clearInterval(slideInterval); // Clear on unmount
        document.removeEventListener('visibilitychange', handleVisibilityChange); // Remove listener
      };
    }, [interval, nextButtonClick, isHovering, isTransitioning]); // isHovering still controls pause on hover


     
    return (                     
            <div className="carousel-container"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}              
            >                
              <div className="image-container" ref={trackRef}
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: isTransitioning ? "transform 0.6s ease-in-out" : "none",
                }}
                >                  
                  {/* Preload adjacent + first/last images */}

                  {slides.map((src, i) => (
                    <div className="carousel-item" key={i} >
                        <img 
                            src={src} 
                            alt={`Banner ${i + 1}`} 
                            crossOrigin="anonymous"  
                            className="carousel-image"
                        />
                        <div className="carousel-fade"></div>
                    </div>
                  ))}                   
                </div>  

                  <div id="image-button-container" className="img-btn-container">
                      <button className="slider-button" id="slider-btn-left" onClick={prevButtonClick}>
                          <FontAwesomeIcon icon={faAngleLeft} />                            
                      </button>
                      <button className="slider-button"  id="slider-btn-right" onClick={nextButtonClick}>
                          <FontAwesomeIcon icon={faAngleRight} />
                      </button>
                  </div>                
            </div> 
       )
}