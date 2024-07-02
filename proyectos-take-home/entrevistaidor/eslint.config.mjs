import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import {fixupPluginRules} from "@eslint/compat";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";

export default [
  // Ignores configuration
  {
    ignores: ["node_modules", "dist", "coverage", ".idea", "pnpm-lock.yaml"],
  },
  // General configuration
  {
    rules: {
      "padding-line-between-statements": [
        "warn",
        {blankLine: "always", prev: "*", next: ["return", "export"]},
        {blankLine: "always", prev: ["const", "let", "var"], next: "*"},
        {blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]},
      ],
      "no-console": "warn",
    },
  },
  // React configuration
  {
    plugins: {
      react: fixupPluginRules(eslintPluginReact),
      "react-hooks": fixupPluginRules(eslintPluginReactHooks),
      "jsx-a11y": fixupPluginRules(eslintPluginJsxA11y),
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.serviceworker,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginJsxA11y.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/self-closing-comp": "warn",
      "react/jsx-sort-props": [
        "warn",
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: false,
          reservedFirst: true,
        },
      ],
      "jsx-a11y/no-static-element-interactions": "off",
      "jsx-a11y/click-events-have-key-events": "off",
    },
  },
  // TypeScript configuration
  ...[
    ...tseslint.configs.recommended,
    {
      rules: {
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-shadow": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-confusing-void-expression": "off",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            args: "after-used",
            ignoreRestSiblings: false,
            argsIgnorePattern: "^_.*?$",
          },
        ],
      },
    },
  ],
  // Prettier configuration
  ...[
    eslintPluginPrettier,
    {
      rules: {
        "prettier/prettier": [
          "warn",
          {
            printWidth: 100,
            trailingComma: "all",
            tabWidth: 2,
            semi: true,
            singleQuote: false,
            bracketSpacing: false,
            arrowParens: "always",
            endOfLine: "auto",
            plugins: ["prettier-plugin-tailwindcss"],
          },
        ],
      },
    },
  ],
  // Import configuration
  {
    plugins: {
      import: fixupPluginRules(eslintPluginImport),
    },
    rules: {
      "import/no-default-export": "off",
      "import/order": [
        "warn",
        {
          groups: [
            "type",
            "builtin",
            "object",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroups: [
            {
              pattern: "~/**",
              group: "external",
              position: "after",
            },
          ],
          "newlines-between": "always",
        },
      ],
    },
  },
];
