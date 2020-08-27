import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

module.exports = (argv, env) => {
    return {
        input: './lib/index.js',
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
                sourcemap: true,
                globals: {
                    'react': 'React'
                }
            }
        ],
        plugins: [
            nodeResolve(),
            babel(),
            terser()
        ],
        external: ['react']
    };
};