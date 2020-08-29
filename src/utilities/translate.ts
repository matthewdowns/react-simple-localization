import { useContext } from 'react';
import LocalizationContext from '../context/LocalizationContext';
import Languages from '../types/Languages';

const translate = (translations: { [languageKey: string]: string }): string | undefined => {
    const localization = useContext(LocalizationContext);
    if (localization.language) {
        //@ts-ignore
        const language = Languages[localization.language] as Languages;
        const languageKey = Object.keys({ [language]: null })[0];
        return translations[languageKey];
    }
};

export default translate;
