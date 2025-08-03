import React, { useState } from 'react';
import InputForm from '../InputForm/InputForm';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import TranslationResult from '../TranslationResult/TranslationResult';

import './LanguageApp.scss';

const LanguageApp = () => {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('es');
  const [translation, setTranslation] = useState('');
  const [examples, setExamples] = useState([]);

  return (
    <div className="language-app">
      <h1>Language Explorer</h1>
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <InputForm text={text} setText={setText} language={language} setTranslation={setTranslation} setExamples={setExamples} />
      <TranslationResult translation={translation} />
      
    </div>
  );
};

export default LanguageApp;