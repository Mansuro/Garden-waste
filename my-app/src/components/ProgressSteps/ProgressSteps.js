import React from 'react';
import './ProgressSteps.css';

const steps = [
  { name: "Postcode", active: false, completed: true },
  { name: "Waste Type", active: false, completed: true },
  { name: "Select Skip", active: true, completed: false },
  { name: "Permit Check", active: false, completed: false },
  { name: "Choose Date", active: false, completed: false },
  { name: "Payment", active: false, completed: false },
];

const ProgressSteps = () => {
  return (
    <div className="progress-container">
      <div className="progress-content">
        <div className="progress-steps">
          {steps.map((step, index) => (
            <div key={step.name} className="step-item">
              <div className="step-item">
                <div
                  className={`step-dot ${
                    step.completed ? "completed" : step.active ? "active" : "inactive"
                  }`}
                >
                  {step.completed ? "✓" : index + 1}
                </div>
                <span
                  className={`step-name ${
                    step.active ? "active" : step.completed ? "completed" : "inactive"
                  }`}
                >
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps; 