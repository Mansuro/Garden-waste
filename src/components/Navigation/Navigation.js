import React from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import './Navigation.css';

const Navigation = ({ onBack, onContinue }) => {
  return (
    <div className="navigation">
      <button className="back-button" onClick={onBack}>
        <ArrowLeft className="button-icon" />
        Back
      </button>
      <div className="size-note">
        <p>Images and information above should give the website user an idea of size specification, colours may vary, customer and/or accessories may be featured which are not included in the hire price.</p>
      </div>
      <button className="continue-button" onClick={onContinue}>
        Continue
        <ChevronRight className="button-icon" />
      </button>
    </div>
  );
};

export default Navigation; 