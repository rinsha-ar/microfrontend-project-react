import React from "react";
import ReactDOM from "react-dom/client";
import LanguageApp from "./components/LanguageApp/LanguageApp";

function mountApp() {
  const rootElement = document.getElementById("root");
  
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<LanguageApp />);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
