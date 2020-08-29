import Languages from '../types/Languages';

const translate = (language: Languages, translations: { [shortcode: string]: string }) => {
    for (let shortcode in Languages) {
        //@ts-ignore
        if (Languages[shortcode] === language) {
            return translations[shortcode];
        }
    }
};

export default translate;
