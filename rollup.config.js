import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { peerDependencies } from './package.json';

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
                name: 'ReactTranslate',
                format: 'umd',
                sourcemap: true,
                globals: {
                    'react': 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        ],
        plugins: [
            nodeResolve(),
            babel(),
            terser()
        ],
        external: Object.keys(peerDependencies)
    };
};
