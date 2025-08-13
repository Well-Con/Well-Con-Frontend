import React from 'react';

const steps = [
  'Personal Details',
  'Professional Details',
  'Availability',
  'Documents & Verification',
  
];

const DoctorProgressBar = ({ currentStep }) => {
  return (
    <div className="w-full flex items-center justify-center py-4 bg-white shadow-sm">
      <div className="flex items-center gap-4 w-full max-w-4xl px-4">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <React.Fragment key={index}>
              <div className="flex items-center gap-2">
                <div
                  className={`rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold
                    ${isCompleted ? 'bg-purple-600 text-white' : isActive ? 'border-2 border-purple-600 text-purple-600' : 'bg-gray-200 text-gray-600'}`}
                >
                  {index + 1}
                </div>
                <div className={`text-sm ${isActive ? 'text-purple-600 font-medium' : 'text-gray-500'}`}>
                  {step}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-px bg-gray-300" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default DoctorProgressBar;
