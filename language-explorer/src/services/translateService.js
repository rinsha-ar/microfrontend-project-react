export const translateText = async (text, sourceLang, targetLang) => {
    if (!text) return '';
  
    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`
      );
  
      const data = await response.json();
  
      if (data && data.responseData) {
        return data.responseData.translatedText;
      } else {
        return 'Translation unavailable';
      }
    } catch (error) {
      console.error('Translation API Error:', error);
      return 'Error fetching translation';
    }
  };
  
 
  