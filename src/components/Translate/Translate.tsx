import React, { Fragment, useContext, useEffect, useState } from 'react';
import LocalizationContext from '../../context/LocalizationContext';
import { TranslateProps } from './Translate.types';
import Languages from '../../types/Languages';

const languageKeys = Object.keys(Languages);

const Translate = (props: TranslateProps) => {
    const localizationContext = useContext(LocalizationContext);
    const [text, setText] = useState<string>();

    useEffect(() => {
        if (localizationContext) {
            for (let i = 0; i < languageKeys.length; i++) {
                try {
                    //@ts-ignore
                    const language = Languages[languageKeys[i] as string];
                    
                    if (localizationContext.language === language) {
                        //@ts-ignore
                        const translation = props[languageKeys[i]];
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