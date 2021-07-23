import babel from "rollup-plugin-babel"
import resolve from "@rollup/plugin-node-resolve"
import external from "rollup-plugin-peer-deps-external"
import commonjs from "@rollup/plugin-commonjs"
import { terser } from "rollup-plugin-terser"
import generateDeclarations from "rollup-plugin-generate-declarations"

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      resolve(),
      commonjs(),
      external(),
      generateDeclarations(),
      terser(),
    ],
  },
]
