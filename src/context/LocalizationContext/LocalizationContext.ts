import { createContext } from 'react';
import { LocalizationContextState } from './LocalizationContext.types';

const LocalizationContext = createContext<LocalizationContextState>({});

export default LocalizationContext;