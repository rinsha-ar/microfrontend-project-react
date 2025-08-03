import React from 'react';
import './InputForm.scss';
import { translateText } from '../../services/translateService'; // adjust path as needed


const InputForm = ({ text, setText, language, setTranslation, setExamples }) => {
  const handleTranslate = async () => {
    const result = await translateText(text, 'en', language); // assuming source is English
    setTranslation(result);
    
    // You can keep examples mocked for now or use your own logic
    setExamples([
      `${text} example in ${language} 1`,
      `${text} example in ${language} 2`,
    ]);
  };

  return (
    <div className="input-form">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <button onClick={handleTranslate}>Translate</button>
    </div>
  );
};

export default InputForm;
