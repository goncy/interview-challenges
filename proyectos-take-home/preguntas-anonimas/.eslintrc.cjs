const {resolve} = require("node:path");

const project = resolve(__dirname, "tsconfig.json");

module.exports = {
  root: true,
  plugins: ["prettier", "import"],
  extends: [
    require.resolve("@vercel/style-guide/eslint/typescript"),
    require.resolve("@vercel/style-guide/eslint/react"),
    require.resolve("@vercel/style-guide/eslint/next"),
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    project,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
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
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/require-await": "off",
    "import/no-default-export": "off",
    "import/order": [
      "warn",
      {
        groups: ["type", "builtin", "object", "external", "internal", "parent", "sibling", "index"],
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
    "padding-line-between-statements": [
      "warn",
      {blankLine: "always", prev: "*", next: ["return", "export"]},
      {blankLine: "always", prev: ["const", "let", "var"], next: "*"},
      {blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]},
    ],
    "no-console": "warn",
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
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "after-used",
        ignoreRestSiblings: false,
        argsIgnorePattern: "^_.*?$",
      },
    ],
  },
};
