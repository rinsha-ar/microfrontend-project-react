import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function mountApp() {
  const rootElement = document.getElementById('root');
  
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
