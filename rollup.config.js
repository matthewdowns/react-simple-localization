import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

module.exports = (argv, env) => {
    return {
        input: './lib/index.js',
        output: [
            {
                file: `dist/cjs/index.js`,
                format: 'cjs',
                sourcemap: true
            },
            {
                file: `dist/es/index.js`,
                format: 'es',
                sourcemap: true
            },
            {
                file: `dist/umd/index.js`,
                name: 'ReactSimpleLocalization',
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