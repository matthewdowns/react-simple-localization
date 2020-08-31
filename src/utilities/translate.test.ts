import Languages from '../types/Languages';
import translate from './translate';

describe('translate', () => {
    it('should return the English translation', () => {
        const translateResult = translate(Languages.en, {
            en: 'Hello',
            es: 'Hola'
        });

        expect(translateResult).toBe('Hello');
    });

    it('should return the Spanish translation', () => {
        const translateResult = translate(Languages.es, {
            en: 'Hello',
            es: 'Hola'
        });

        expect(translateResult).toBe('Hola');
    })
})
