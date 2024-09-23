module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "next", "plugin:react/recommended"],
  rules: {
    "no-console": "warn", // warn , error
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-trailing-spaces": ["error", { skipBlankLines: true }],
    "no-empty": ["error", { allowEmptyCatch: true }],
    quotes: ["error", "double", { allowTemplateLiterals: true }],

    "no-control-regex": 0,
    "no-useless-escape": 0,
    "react-hooks/exhaustive-deps": 0,
    "react/display-name": 0,
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    // "unused-imports/no-unused-imports": "error",
    // "unused-imports/no-unused-vars": [
    //   "error",
    //   {
    //     vars: "all",
    //     varsIgnorePattern: "^_",
    //     args: "after-used",
    //     argsIgnorePattern: "^_",
    //   },
    // ],
    "no-empty-function": [
      "error",
      {
        allow: ["constructors", "arrowFunctions"],
      },
    ],
    "react/no-unknown-property": [
      "error",
      {
        ignore: ["strategy", "bis_skin_checked", "shrink", "align", "charSet"],
      },
    ],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  // plugins: ["unused-imports"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
