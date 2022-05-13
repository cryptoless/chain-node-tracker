import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';

import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';

const pkg = require('./package.json');

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.ts',
    output: {
      name: pkg.name,
      file: pkg.browser,
      format: 'umd',
    },
    // externals: [],
    plugins: [
      json(),

      typescript({ useTsconfigDeclarationDir: true, tsconfig: 'tsconfig.build.json' }),

      nodeResolve({
        extensions: ['.js', '.ts', '.tsx'],
      }),
      commonjs(), // so Rollup can convert `ms` to an ES module
      babel({
        babelHelpers: 'runtime',
        exclude: '**/node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
    ],
  },
  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/index.ts',
    output: [
      { format: 'cjs', exports: 'named', dir: 'dist/cjs', preserveModules: true },
      // { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      // Allow json resolution
      json(),
      // Compile TypeScript files
      typescript({ useTsconfigDeclarationDir: true, tsconfig: 'tsconfig.build.json' }),
      // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
      commonjs(),
      // Allow node_modules resolution, so you can use 'external' to control
      // which external modules to include in the bundle
      // https://github.com/rollup/rollup-plugin-node-resolve#usage
      nodeResolve(),

      // Resolve source maps to the original source
      sourceMaps(),
    ],
  },
];
