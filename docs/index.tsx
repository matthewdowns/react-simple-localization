const App = () => {
    {/*@ts-ignore*/}
    const localization = React.useContext(ReactTranslate.LocalizationContext);

    return (
        <div>
            <p>
                {/*@ts-ignore*/}
                <ReactTranslate.Translate en="Hello" es="Hola" />
            </p>
            {/*@ts-ignore*/}
            <button onClick={() => localization.update('English')}>
                English
            </button>
            {/*@ts-ignore*/}
            <button onClick={() => localization.update('Español')}>
                Spanish
            </button>
        </div>
    );
};

const Root = () => {
    const [language, setLanguage] = React.useState<string>('English');

    return (
        /*@ts-ignore*/
        <ReactTranslate.LocalizationContext.Provider value={{
            language,
            update: (newLanguage: string) => {
                console.log(newLanguage);
                setLanguage(newLanguage);
            }
        }}>
            <App />
        {/*@ts-ignore*/}
        </ReactTranslate.LocalizationContext.Provider>
    )
}

var root = document.getElementById('root');

ReactDOM.render(<Root />, root);
