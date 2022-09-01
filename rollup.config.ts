import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import ttypescript from 'ttypescript';

/**
 * https://github.com/ezolenko/rollup-plugin-typescript2/issues/201
 * resolve alias in emitted declaration files
 */
const plugins = [
  typescript({
    typescript: ttypescript,
    tsconfig: './tsconfig.json',
  }),
];

export default defineConfig([
  {
    input: './src/index.ts',
    output: [
      {
        file: 'dist/index.esm.js',
        format: 'esm',
      },
      {
        file: 'dist/index.umd.js',
        format: 'umd',
        name: 'Algorithm',
      },
    ],
    plugins,
  },
]);
