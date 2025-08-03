import React from 'react';
import './TranslationResult.scss';

const TranslationResult = ({ translation }) => {
  return (
    <div className="translation-result">
      <h2>Translation:</h2>
      <p>{translation}</p>
    </div>
  );
};

export default TranslationResult;