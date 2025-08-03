// src/App.jsx
import React, { Suspense, lazy } from 'react';

// Load remote components (from other apps)
const LanguageExplorer = lazy(() => import('languageExplorer/LanguageApp'));
const CalorieIntaker = lazy(() => import('calorieTracker/CalorieApp'));

const App = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>🌐 Language & Nutrition Dashboard</h1>

      <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
        <h2>🗣️ Language Explorer</h2>
        <Suspense fallback={<div>Loading Language Explorer...</div>}>
          <LanguageExplorer />
        </Suspense>
      </div>

      <div style={{ padding: '1rem', border: '1px solid #ccc' }}>
        <h2>🥗 Calorie Intaker</h2>
        <Suspense fallback={<div>Loading Calorie Intaker...</div>}>
          <CalorieIntaker />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
