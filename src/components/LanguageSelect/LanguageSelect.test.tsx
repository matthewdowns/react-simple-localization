import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import LocalizationContext, { LocalizationContextState } from '../../context/LocalizationContext';
import LanguageSelect from './LanguageSelect';
import { LanguageSelectProps } from './LanguageSelect.types';
import Languages from "../../types/Languages";

const renderLanguageSelect = (
    props: {
        localizationContext: LocalizationContextState,
        languageSelectProps: LanguageSelectProps
    }
) => {

    return render(
        <LocalizationContext.Provider value={props.localizationContext}>
            <LanguageSelect data-testid="language-select-test" {...props.languageSelectProps} />
        </LocalizationContext.Provider>
    );
};

describe("Translate", () => {
    it("should display a select element with options of all language shortcodes", async () => {
        const { findByTestId, findByText } = renderLanguageSelect({
            localizationContext: {},
            languageSelectProps: {
                display: 'shortcode'
            }
        });

        const select = await findByTestId('language-select-test');

        const languageKeys = Object.keys(Languages);
        for (let i = 0; i < languageKeys.length; i++) {
            const languageKey = languageKeys[i];
            const option = await findByText(languageKey);
            expect(option).toHaveValue(languageKey);
        }
    });

    it("should display a select element with options of all language native spellings", async () => {
        const { findByTestId, findByText } = renderLanguageSelect({
            localizationContext: {},
            languageSelectProps: {
                display: 'native spelling'
            }
        });

        const select = await findByTestId('language-select-test');

        const languageKeys = Object.keys(Languages);
        for (let i = 0; i < languageKeys.length; i++) {
            const languageKey = languageKeys[i];
            //@ts-ignore
            const languageValue = Languages[languageKey];
            const option = await findByText(languageValue);
            expect(option).toHaveValue(languageKey);
        }
    });
});
