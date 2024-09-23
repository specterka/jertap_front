import React from "react";

const Stepper = ({ steps, activeStep, onChange, coveredSteps = [] }) => {
  // Handlers
  const onClickStep = (e, step) => {
    e.preventDefault();
    if (activeStep === step) return null;
    if (!coveredSteps.includes(step)) return null;
    onChange(step);
  };
  return (
    <div className="step-block-points-inner">
      <ul>
        {steps?.map((step) => (
          <li key={step?.id} onClick={(e) => onClickStep(e, step.id)}>
            <a href="#" className={activeStep === step.id ? "active" : ""}>
              <span>{step?.id}</span>
              <p>{step?.label}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stepper;
