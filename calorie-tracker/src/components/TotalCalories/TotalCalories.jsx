import React from 'react';
import './TotalCalories.scss';

const TotalCalories = ({ total }) => (
  <div className="total-calories">
    <strong>Total Calories:</strong> {total} cal
  </div>
);

export default TotalCalories;
