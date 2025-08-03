import React from 'react';
import './LanguageSelector.scss';

const LanguageSelector = ({ language, setLanguage }) => {
  return (
    <div className="language-selector">
      <label htmlFor="language">Select Language:</label>
      <select id="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="zh">Chinese</option>
      </select>
    </div>
  );
};

export default LanguageSelector;