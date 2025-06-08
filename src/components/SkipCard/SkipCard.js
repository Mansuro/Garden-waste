import React from 'react';
import { ChevronRight, Clock, AlertCircle, CheckCircle2, Truck } from 'lucide-react';
import SkipImage from '../SkipImage/SkipImage';

const SkipCard = ({ skip, isSelected, onSelect, formatPrice, calculateFinalPrice }) => {
  return (
    <div
      className={`skip-card ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(skip.id)}
    >
      {/* Skip Image */}
      <div className="skip-image-container">
        <div className="skip-image-wrapper">
          <SkipImage size={skip.size} />
          {/* Size Badge */}
          <span className="badge badge-blue">
            {skip.size} Yards
          </span>
          {/* Road Restriction Badge */}
          {!skip.allowed_on_road && (
            <span className="badge badge-orange">
              Not Allowed On The Road
            </span>
          )}
        </div>
      </div>

      {/* Skip Details */}
      <div className="skip-details">
        <h3 className="skip-title">
          <Truck size={20} />
          {skip.size} Yard Skip
        </h3>
        
        {/* Features */}
        <div className="skip-features">
          <span className={`feature-tag ${skip.allowed_on_road ? 'allowed' : 'not-allowed'}`}>
            {skip.allowed_on_road ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
            {skip.allowed_on_road ? 'Road Allowed' : 'Not Road Allowed'}
          </span>
          <span className={`feature-tag ${skip.allows_heavy_waste ? 'allowed' : 'not-allowed'}`}>
            {skip.allows_heavy_waste ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
            {skip.allows_heavy_waste ? 'Heavy Waste' : 'No Heavy Waste'}
          </span>
        </div>

        <p className="skip-period">
          <Clock size={16} />
          {skip.hire_period_days} day hire period
        </p>
        
        <p className="skip-price">
          {formatPrice(calculateFinalPrice(skip.price_before_vat, skip.vat))}
        </p>

        {/* Select Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(skip.id);
          }}
          className={`select-button ${isSelected ? "selected" : "unselected"}`}
        >
          {isSelected ? "Selected" : "Select This Skip"}
          {!isSelected && <ChevronRight className="button-icon" />}
        </button>
      </div>
    </div>
  );
};

export default SkipCard; 