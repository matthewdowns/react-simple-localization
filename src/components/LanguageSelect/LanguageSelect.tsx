import React, { useContext } from 'react';
import LocalizationContext from '../../context/LocalizationContext';
import Languages from '../../types/Languages';
import { LanguageSelectProps } from './LanguageSelect.types';

const languageKeys = Object.keys(Languages);

const LanguageSelect = ({
    display = 'shortcode',
    ...rest
}: LanguageSelectProps) => {
    const localization = useContext(LocalizationContext);

    return (
        <select
            value={localization?.language}
            //@ts-ignore
            onChange={e => localization.update(Languages[e.target.value])}
            {...rest}
        >
            {languageKeys.map(key => (
                <option key={key} value={key}>
                    {display === 'shortcode' ? key : 
                        /*@ts-ignore*/
                        Languages[key]
                    }
                </option>
            ))}
        </select>
    );
};

export default LanguageSelect;
