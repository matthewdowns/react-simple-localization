import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import LocalizationContext, { LocalizationContextState } from '../../context/LocalizationContext';
import Translate from './Translate';
import { TranslateProps } from './Translate.types';
import Languages from "../../types/Languages";
import Locales from "../../types/Locales";

const renderTranslate = (
    props: {
        localizationContext: LocalizationContextState,
        translateProps?: Partial<TranslateProps>
    }
) => {
    return render(
        <LocalizationContext.Provider value={props.localizationContext}>
            <span data-testid="translate-test">
                <Translate {...props.translateProps} />
            </span>
        </LocalizationContext.Provider>
    );
}

describe("Translate", () => {
    it("should display a English translation", async () => {
        const englishTranslation = 'Hello World';

        const { findByTestId } = renderTranslate({
            localizationContext: {
                language: Languages.en
            },
            translateProps: {
                en: englishTranslation
            }
        });

        const element = await findByTestId('translate-test');

        expect(element).toHaveTextContent(englishTranslation);
    });
    
    it("should display a Spanish translation", async () => {
        const spanishTranslation = 'Hola Tierra';

        const { findByTestId } = renderTranslate({
            localizationContext: {
                language: Languages.es
            },
            translateProps: {
                es: spanishTranslation
            }
        });

        const element = await findByTestId('translate-test');

        expect(element).toHaveTextContent(spanishTranslation);
    });

    it("should display a empty DOM element from not providing any translations", async () => {
        const { findByTestId } = renderTranslate({ localizationContext: { } });

        const element = await findByTestId('translate-test');

        expect(element).toBeEmptyDOMElement();
    });
});