import i18n from 'i18next';
    import { initReactI18next } from 'react-i18next';
    import en from './locales/en.json'; // Assurez-vous que le chemin est correct
    import fr from './locales/fr.json'; // Assurez-vous que le chemin est correct

    i18n
      .use(initReactI18next)
      .init({
        resources: {
          en: { translation: en },
          fr: { translation: fr },
        },
        lng: 'fr', // Langue par défaut
        fallbackLng: 'en',
        interpolation: { escapeValue: false },
      });

    export default i18n;