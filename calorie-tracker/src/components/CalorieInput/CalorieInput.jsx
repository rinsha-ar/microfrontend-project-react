import React, { useState } from 'react';
import './CalorieInput.scss';
import { fetchCalories } from '../../services/calorieService';

const CalorieInput = ({ onAdd }) => {
  const [food, setFood] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!food) return;

    const calories = await fetchCalories(food);
    onAdd({ food, calories });

    setFood('');
  };

  return (
    <form className="calorie-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter food item"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default CalorieInput;
