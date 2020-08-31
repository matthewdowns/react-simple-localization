import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import license from 'rollup-plugin-license';
import { terser } from 'rollup-plugin-terser';
import { version, license as licenseText, peerDependencies } from './package.json';

const config = (environment) => {
    const filename = environment === 'production'
        ? 'react-translate.production.min.js'
        : 'react-translate.development.js'
    let plugins = [
        nodeResolve(), 
        babel(), 
        license({
            banner: {
                commentStyle: 'none',
                content: `
/** @license ReactTranslate v${version}
 * ${filename}
 *
 * Copyright (c) <%= moment().format('YYYY') %> React Translate.
 *
 * This source code is licensed under the ${licenseText} license found in
 * the LICENSE file in the root directory of this source tree.
 */
`
            }
        })
    ];

    if (environment === 'production') {
        plugins.push(terser());
    }

    return {
        input: './lib/index.js',
        output: [
            {
                file: `dist/cjs/${filename}`,
                format: 'cjs'
            },
            {
                file: `dist/umd/${filename}`,
                name: 'ReactTranslate',
                format: 'umd',
                exports: 'named',
                globals: {
                    'react': 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        ],
        plugins,
        external: Object.keys(peerDependencies)
    }
};

module.exports = (argv, env) => {
    return [config('development'), config('production')];
};
