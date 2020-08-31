# React Translate
The core library for React Translate.

![Shields.io badge](https://img.shields.io/david/react-translate/core)

The latest distribution files can be found on UNPKG:
- [CommonJS](https://unpkg.com/browse/@react-translate/core/dist/cjs/)
- [UMD](https://unpkg.com/browse/@react-translate/core/dist/umd/)

## Installation
`npm i --save @react-translate/core`

## Usage

At the root of your app, set up your localization context provider:

```js
import React, { useState } from 'react';
import { Languages, Locales, LocalizationContext } from '@react-translate/core';

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
import Translate from '@react-translate/core';

const MyComponent = () => {
    return (
        <div>
            <Translate en="Hello" es="Hola" de="Guten Tag" fr="Bonjour" it="Salve" ru="Zdravstvuyte" />
        </div>
    )
}
```

## Contributing

### [Contributing Guide](./CONTRIBUTING.md)
Please read our contributing guide for information on how to suggest code changes.

### [Code of Conduct](./CODE_OF_CONDUCT.md) 
We encourage you to read our code of conduct to know what is and isn't tolerated by interacting with our repository.

### [License](./LICENSE)
React Translate is [GPL-3.0](https://choosealicense.com/licenses/gpl-3.0/) licensed.
