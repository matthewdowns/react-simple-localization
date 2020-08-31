import React, { Fragment, useContext, useEffect, useState } from 'react';
import LocalizationContext from '../../context/LocalizationContext';
import { TranslateProps } from './Translate.types';
import { Languages } from '../../types';

const languageKeys = Object.keys(Languages);

const LanguageRecords = Languages as Record<string, string>;

const Translate = (props: TranslateProps): JSX.Element => {
    const localizationContext = useContext(LocalizationContext);
    const [text, setText] = useState<string>();

    useEffect(() => {
        if (localizationContext) {
            for (let i = 0; i < languageKeys.length; i++) {
                try {
                    const language = LanguageRecords[languageKeys[i]] as Languages;
                    
                    if (localizationContext.language === language) {
                        const translation = props[languageKeys[i] as keyof TranslateProps];
                        if (text !== translation) {
                            setText(translation);
                        }
                        break;
                    }
                } catch (err) {
                    throw new Error('Unsupported language code');
                }
            }
        }
    }, [localizationContext.language]);

    return (
        <Fragment>{text}</Fragment>
    );
};

export default Translate;
