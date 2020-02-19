import React from 'react';

import './ErrorIndicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">Бум!</span>
      <span>
        что-то пошло ужасно неправильно
      </span>
      <span>
        (но мы уже послали дроидов, чтобы исправить это)
      </span>
    </div>
  );
};

export default ErrorIndicator;
