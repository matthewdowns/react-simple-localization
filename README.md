# react-simple-localization
React Localization is a simple library consisting of a Translate component using React's context API to update content dynamically.

## Installation
`npm i --save react-simple-localization`

## Usage

At the root of your app, set up your localization context provider:

```ts
import { useState } from 'react';
import { Languages, Locales, LocalizationContext } from 'react-simple-localization';

const App = () => {
    const [currentLanguage, setCurrentLanguage] = useState<Languages>(Languages.en);
    const [currentLocale, setCurrentLocale] = useState<Locales>(Locales.enUS);

    return (
        <LocalizationContext.Provider value={{
            language: currentLanguage,
            locale: currentLocale,
            update: (language: Languages, locale?: Locales) => {
                setCurrentLanguage(language);
                setCurrentLocale(locale);
            }
        }}>
            ...
        </LocalizationContext.Provider>
    )
}
```

You can then use the `Translate` component which will automatically update it's text to the proper language/locale whenever the context is updated.

```
import React, { useContext } from 'react';
import { LocalizationContext, Translate } from 'react-simple-localization';

const MyComponent = () => {
    const localization = useContext(LocalizationContext);

    return (
        <div>
            <Translate en="Hello" es="Hola" de="Guten Tag" fr="Bonjour" it="Salve" ru="Zdravstvuyte" />
        </div>
    )
}
```
