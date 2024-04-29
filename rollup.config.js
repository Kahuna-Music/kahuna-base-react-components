// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import image from '@rollup/plugin-image';
import copy from 'rollup-plugin-copy';


const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      image(),
      typescript({tsconfig: "./tsconfig.json"}),
      terser(),
      postcss({
        extensions: [".css"]
      }),
      copy({
        targets: [
          { src: 'src/assets/fonts/*', dest: 'dist/fonts' }, // Copy fonts from src/assets/fonts/ to dist/fonts/
        ],
      }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: [{file: "dist/types.d.ts", format: "es"}],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];