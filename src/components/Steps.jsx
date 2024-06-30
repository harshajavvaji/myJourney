import React from 'react';
import './Steps.css';

const stepsData = [
  [
    { label: 'Start Point', icon: '📍', highlight: 'start' },
    { label: 'Offer Letter', icon: '📄', highlight: 'green' },
    { label: 'NDA Signed', icon: '✍️', highlight: 'green' },
    { label: 'Onboarding Form', icon: '📝', highlight: 'red' },
  ],
  [
    { label: 'Buddy', icon: '🛡️' },
    { label: 'Official Mail Id', icon: '📧' },
    { label: 'Step A', icon: '🔒' },
    { label: 'Step B', icon: '⚙️' },
  ],
  [
    { label: 'Step C', icon: '📅' },
    { label: 'Step D', icon: '🔍' },
    { label: 'Step E', icon: '🏆' },
    { label: 'Finish Point', icon: '🏁', highlight: 'finish' },
  ]
];

const Steps = () => {
  return (
    <div className="steps-container">
      {stepsData.map((row, rowIndex) => (
        <div key={rowIndex} className="steps-row">
          <div className="line"></div>
          {row.map((step, index) => (
            <div key={index} className={`step ${step.highlight ? step.highlight : ''}`}>
              <div className="step-icon">{step.icon}</div>
              <div className="step-circle"></div>
              <div className="step-label">{step.label}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Steps;
