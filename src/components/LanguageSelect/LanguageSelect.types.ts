import { CSSProperties } from 'react';
import Languages from '../../types/Languages';

export interface LanguageSelectProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    /**
     * @default 'shortcode'
     */
    display?: 'shortcode' | 'native spelling';
}
