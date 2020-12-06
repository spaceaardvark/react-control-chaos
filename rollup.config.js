import alias from "@rollup/plugin-alias";
import nodeResolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const rollupPlugins = () => [
  alias({
    entries: [
      { find: "react", replacement: "preact/compat" },
      { find: "react-dom", replacement: "preact/compat" },
    ]
  }),
  nodeResolve(),
];

export default [
  {
    input: "src/main.js",
    output: {
      file: "dist/main.js",
      format: "iife",
      sourcemap: true,
    },
    plugins: rollupPlugins(),
  },
  {
    input: "src/main.js",
    output:
    {
      file: "dist/main.min.js",
      format: "iife",
      sourcemap: true,
      plugins: [terser()],
    },
    plugins: rollupPlugins(),
  },
];
