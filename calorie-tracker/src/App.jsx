import React, { useState } from 'react';
import './App.scss';

import Header from './components/Header/Header';
import CalorieInput from './components/CalorieInput/CalorieInput';
import CalorieList from './components/CalorieList/CalorieList';
import TotalCalories from './components/TotalCalories/TotalCalories';

const App = () => {
  const [entries, setEntries] = useState([]);

  const handleAddEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  const totalCalories = entries.reduce((sum, item) => sum + item.calories, 0);

  return (
    <div className="app">
      <Header />
      <CalorieInput onAdd={handleAddEntry} />
      <CalorieList items={entries} />
      <TotalCalories total={totalCalories} />
    </div>
  );
};

export default App;
