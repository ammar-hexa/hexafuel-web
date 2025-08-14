import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default defineConfig ([
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "no-unused-vars": "warn",
    },
  },
])

// export default defineConfig([
//   {
//     files: ["**/*.{js,mjs,cjs,jsx}"],
//     plugins: { js },
//     extends: ["js/recommended"],
//     languageOptions: { globals: globals.browser },
//   },
//   pluginReact.configs.flat.recommended,
//   {
//     files: ["**/*.jsonc"],
//     plugins: { json },
//     language: "json/jsonc",
//     extends: ["json/recommended"],
//   },
//   {
//     files: ["**/*.md"],
//     plugins: { markdown },
//     language: "markdown/gfm",
//     extends: ["markdown/recommended"],
//   },
//   {
//     files: ["**/*.css"],
//     plugins: { css },
//     language: "css/css",
//     extends: ["css/recommended"],
//   },
//   {
//     rules: {
//       "no-unused-vars": "warn",
//       "no-undef": "warn",
//     },
//   },
// ]);
