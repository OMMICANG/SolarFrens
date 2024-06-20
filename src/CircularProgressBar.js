import React, { useEffect, useState } from 'react';
import './CircularProgressBar.css';

const CircularProgressBar = ({ onProgressChange }) => { //
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setProgress((prevProgress) => {
      // setProgress((prevProgress) => (prevProgress + 1) % 101);
      const newProgress = prevProgress < 100 ? prevProgress + 1 : 0;
        onProgressChange(newProgress);
        return newProgress;
        });
    }, 500); // Update progress every 100ms

    return () => clearInterval(interval);
  }, [onProgressChange]);
// Fill-Up Feature add
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="circular-progress-bar">
      <svg className="progress-ring" width="100" height="100">
        <circle
          className="progress-ring__circle"
          stroke="goldenrod"
          strokeWidth="8"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
          style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
        />
      </svg>
      <div className="progress-text">{progress}%</div>
    </div>
  );
};

export default CircularProgressBar;
