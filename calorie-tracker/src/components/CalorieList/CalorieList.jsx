import React from 'react';
import './CalorieList.scss';

const CalorieList = ({ items }) => (
  <ul className="calorie-list">
    {items.map((item, index) => (
      <li key={index}>
        {item.food} — {item.calories} cal
      </li>
    ))}
  </ul>
);

export default CalorieList;
