/* eslint-disable @typescript-eslint/no-var-requires */
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { join } from 'path';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import tailwindcss from 'tailwindcss';

const isDev = process.env.NODE_ENV === 'development';
const sourcemap = isDev ? 'inline' : false;

export default {
  input: join(__dirname, 'index.tsx'),
  plugins: [
    copy({
      targets: [
        { src: 'renderer/index.html', dest: 'out/renderer/' },
      ],
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    typescript({ outputToFilesystem: true }),
    postcss({
      extract: true,
      minimize: true,
      plugins: [
        tailwindcss('./tailwind.config.js'),
      ],
    }),
    !isDev && terser(),
    isDev && serve({
      contentBase: 'out/renderer',
      port: 3000,
      delay: 1000,
    }),
    isDev && livereload('out/renderer/bundle.js'),
  ],
  output: {
    file: 'out/renderer/bundle.js',
    format: 'iife',
    name: 'OpenAtc',
    sourcemap: sourcemap,
  },
};
