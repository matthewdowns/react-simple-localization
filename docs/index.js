"use strict";
var App = function () {
    { /*@ts-ignore*/ }
    var localization = React.useContext(ReactTranslate.LocalizationContext);
    return (React.createElement("div", null,
        React.createElement("p", null,
            React.createElement(ReactTranslate.Translate, { en: "Hello", es: "Hola" })),
        React.createElement("button", { onClick: function () { return localization.update('English'); } }, "English"),
        React.createElement("button", { onClick: function () { return localization.update('Español'); } }, "Spanish")));
};
var Root = function () {
    var _a = React.useState('English'), language = _a[0], setLanguage = _a[1];
    return (
    /*@ts-ignore*/
    React.createElement(ReactTranslate.LocalizationContext.Provider, { value: {
            language: language,
            update: function (newLanguage) {
                console.log(newLanguage);
                setLanguage(newLanguage);
            }
        } },
        React.createElement(App, null)));
};
var root = document.getElementById('root');
ReactDOM.render(React.createElement(Root, null), root);
