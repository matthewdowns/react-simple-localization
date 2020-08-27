import { resolve } from 'path';
import del from 'rollup-plugin-delete';
import typescript from 'rollup-plugin-typescript';
import { name } from './package.json';

module.exports = (argv, env) => {


    return {
        input: resolve(__dirname, './lib/index.ts'),
        name,
        output: [
            {
                dir: './build/es',
                format: 'es'
            }
        ],
        plugins: [
            del({ targets: [resolve(__dirname, './build')]}),
            typescript()
        ]
    };
};