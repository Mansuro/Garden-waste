import React from 'react';
import { RotateCcw } from 'lucide-react';
import './FilterSection.css';

const FilterSection = ({ filters, onFilterChange, onResetFilters, formatPrice }) => {
  return (
    <div className="filters-container">
      <div className="filters-header">
        <span className="filters-title">Filter Options</span>
        <button 
          className="reset-button"
          onClick={onResetFilters}
        >
          <RotateCcw size={14} />
          Reset Filters
        </button>
      </div>
      <div className="filters-grid">
        <div className="filter-group">
          <label className="filter-label">Size Range (Yards)</label>
          <input
            type="range"
            className="range-slider"
            min="0"
            max="20"
            value={filters.sizeRange[1]}
            onChange={(e) => onFilterChange('sizeRange', [filters.sizeRange[0], parseInt(e.target.value)])}
          />
          <div className="filter-value">{filters.sizeRange[0]} - {filters.sizeRange[1]} yards</div>
        </div>

        <div className="filter-group">
          <label className="filter-label">Price Range</label>
          <input
            type="range"
            className="range-slider"
            min="0"
            max="1000"
            value={filters.priceRange[1]}
            onChange={(e) => onFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
          />
          <div className="filter-value">
            {formatPrice(filters.priceRange[0])} - {formatPrice(filters.priceRange[1])}
          </div>
        </div>

        <div className="filter-group">
          <label className="filter-label">Road Allowed Only</label>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={filters.roadAllowed}
              onChange={(e) => onFilterChange('roadAllowed', e.target.checked)}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div className="filter-group">
          <label className="filter-label">Hire Duration</label>
          <select
            className="filter-input"
            value={filters.duration}
            onChange={(e) => onFilterChange('duration', e.target.value)}
          >
            <option value="all">All Durations</option>
            <option value="7">7 Days</option>
            <option value="14">14 Days</option>
            <option value="21">21 Days</option>
            <option value="28">28 Days</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSection; 