import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Load remote components (from other apps)
const LanguageExplorer = lazy(() => import('languageExplorer/LanguageApp'));
const CalorieTracker = lazy(() => import('calorieTracker/CalorieApp'));

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
        <h2>🥗 Calorie Tracker</h2>
        <Suspense fallback={<div>Loading Calorie Tracker...</div>}>
          <CalorieTracker />
        </Suspense>
      </div>
    </div>
  );
};

function mountApp() {
  const rootElement = document.getElementById('root');
  
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    reportWebVitals();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
