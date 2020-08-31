import Languages from '../types/Languages';

const LanguageRecords = Languages as Record<string, string>;

const translate = (language?: Languages, translations?: { [shortcode: string]: string }): string | undefined => {
    if (language && translations) {
        for (const shortcode in Languages) {
            if (LanguageRecords[shortcode] as Languages === language) {
                return translations[shortcode];
            }
        }
    }
};

export default translate;
