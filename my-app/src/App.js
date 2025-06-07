import { useState, useEffect } from "react";
import "./App.css";
import ProgressSteps from './components/ProgressSteps/ProgressSteps';
import FilterSection from './components/FilterSection/FilterSection';
import Carousel from './components/Carousel/Carousel';
import Navigation from './components/Navigation/Navigation';

function App() {
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [skipData, setSkipData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const defaultFilters = {
    sizeRange: [0, 20],
    priceRange: [0, 1000],
    roadAllowed: false,
    duration: 'all'
  };

  const [filters, setFilters] = useState(defaultFilters);

  useEffect(() => {
    const fetchSkipData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft");
        if (!response.ok) {
          throw new Error("Failed to fetch skip data");
        }
        const data = await response.json();
        setSkipData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchSkipData();
  }, []);

  const calculateFinalPrice = (priceBeforeVat, vat) => {
    return Math.round(priceBeforeVat * (1 + vat / 100));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleSkipSelection = (skipId) => {
    setSelectedSkip(selectedSkip === skipId ? null : skipId);
    if (selectedSkip !== skipId) {
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
    setCurrentIndex(0);
  };

  const handleResetFilters = () => {
    setFilters(defaultFilters);
  };

  const filteredSkips = skipData.filter(skip => {
    const price = calculateFinalPrice(skip.price_before_vat, skip.vat);
    return (
      skip.size >= filters.sizeRange[0] &&
      skip.size <= filters.sizeRange[1] &&
      price >= filters.priceRange[0] &&
      price <= filters.priceRange[1] &&
      (!filters.roadAllowed || skip.allowed_on_road) &&
      (filters.duration === 'all' || skip.hire_period_days === parseInt(filters.duration))
    );
  });

  const handlePrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 3);
    }
  };

  const handleNextSlide = () => {
    if (currentIndex + 3 < filteredSkips.length) {
      setCurrentIndex(prev => prev + 3);
    }
  };

  return (
    <div className="app-container">
      <ProgressSteps />

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <h1>Choose Your Perfect Skip</h1>
          <p>Select the ideal skip size for your project needs</p>
        </div>

        <FilterSection
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
          formatPrice={formatPrice}
        />

        <Carousel
          skips={filteredSkips}
          selectedSkip={selectedSkip}
          onSkipSelect={handleSkipSelection}
          currentIndex={currentIndex}
          onPrevSlide={handlePrevSlide}
          onNextSlide={handleNextSlide}
          formatPrice={formatPrice}
          calculateFinalPrice={calculateFinalPrice}
          loading={loading}
          error={error}
        />

        {selectedSkip && (
          <Navigation
            onBack={() => setSelectedSkip(null)}
            onContinue={() => console.log('Continue clicked')}
          />
        )}
      </div>
    </div>
  );
}

export default App;
