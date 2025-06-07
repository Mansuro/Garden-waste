import React from 'react';
import { ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import SkipCard from '../SkipCard/SkipCard';
import './Carousel.css';

const Carousel = ({ 
  skips, 
  selectedSkip, 
  onSkipSelect, 
  currentIndex, 
  onPrevSlide, 
  onNextSlide, 
  formatPrice, 
  calculateFinalPrice,
  loading,
  error 
}) => {
  const getCarouselTransform = () => {
    const cardWidth = (100 - 4) / 3; // 100% - 4rem gap, divided by 3 cards
    const translateX = -(currentIndex * (cardWidth + 2)); // cardWidth + gap
    return `translateX(${translateX}%)`;
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading skip options...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <AlertCircle size={48} color="var(--error)" />
        <p className="error-message">Error loading skip data: {error}</p>
        <button onClick={() => window.location.reload()} className="retry-button">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{
            transform: getCarouselTransform()
          }}
        >
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={selectedSkip === skip.id}
              onSelect={onSkipSelect}
              formatPrice={formatPrice}
              calculateFinalPrice={calculateFinalPrice}
            />
          ))}
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="carousel-nav">
        <button
          className="carousel-button"
          onClick={onPrevSlide}
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="carousel-button"
          onClick={onNextSlide}
          disabled={currentIndex + 3 >= skips.length}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Carousel; 