
import i18n from 'i18next';

const getTranslatedText = (key) => {
  return i18n.language === 'ta' ? translations[key]?.ta : translations[key]?.en;
};

const translations = {
  'welcomeMessage': {
    en: 'Hello! What would you like to do today?',
    ta: 'வணக்கம்! நீங்கள் இன்று என்ன செய்ய விரும்புகிறீர்கள்?',
  },
  // Add more keys and translations as needed
};

export default getTranslatedText;