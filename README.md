# react-translate
A simple component that handles language translations using the React context API.

![Shields.io badge](https://img.shields.io/david/matthewdowns/react-translate)

## Installation
`npm i --save react-translate`

## Usage

At the root of your app, set up your localization context provider:

```js
import { useState } from 'react';
import { Languages, Locales, LocalizationContext } from 'react-translate';

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

You can then use the `Translate` component which will update it's translation whenever LocalizationContext's `language` property is updated.

```js
import React, { useContext } from 'react';
import { Translate } from 'react-translate';

const MyComponent = () => {
    return (
        <div>
            <Translate en="Hello" es="Hola" de="Guten Tag" fr="Bonjour" it="Salve" ru="Zdravstvuyte" />
        </div>
    )
}
```

## [Code of Conduct](./CODE_OF_CONDUCT.md) 

## [Contributing](./CONTRIBUTING.md)

## [License](./LICENSE)
