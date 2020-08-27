import { resolve } from 'path';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { dependencies } from './package.json';

module.exports = (argv, env) => {


    return {
        input: resolve(__dirname, './lib/index.js'),
        output: [
            {
                file: 'dist/react-translate.common.js',
                format: 'cjs',
                sourcemap: true
            },
            {
                file: 'dist/react-translate.es.js',
                format: 'es',
                sourcemap: true
            },
            {
                file: `dist/react-translate.umd.js`,
                name: 'ReactTranslate',
                format: 'umd',
                sourcemap: true
            }
        ],
        plugins: [
            babel({ babelHelpers: 'bundled' }),
            terser()
        ],
        external: Object.keys(dependencies)
    };
};