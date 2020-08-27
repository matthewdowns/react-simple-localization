import Languages from '../../types/Languages';
import Locales from '../../types/Locales';

export interface LocalizationContextState {
    language?: Languages;
    locale?: Locales;
    update?: (language: Languages, locale?: Locales) => void;
}