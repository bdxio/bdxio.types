const ERROR = 2;

module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    /* General */
    "semi": [ERROR, "always"],
    "quotes": [ERROR, "double"],
    "indent": [ERROR, 2, {
      "SwitchCase": 1,
    }],
    "comma-dangle": [ERROR, "always-multiline"],
    "max-len": [ERROR, { "code": 120, "tabWidth": 2, "ignoreUrls": true, "ignoreRegExpLiterals": true }],
    "keyword-spacing": [ERROR, { "before": true, "after": true }],
    "space-before-function-paren": [ERROR, { "anonymous": "always", "named": "never" }],
    "no-multi-spaces": [ERROR, { "ignoreEOLComments": true }],
    "no-multiple-empty-lines": [ERROR, { "max": 1, "maxBOF": 0, "maxEOF": 0 }],
    "no-trailing-spaces": [ERROR, { "skipBlankLines": true }],
    "space-before-blocks": [ERROR, "always"],
    "import/order": [
      "error",
      {
        "groups": [
          ["builtin", "external"],
          ["internal", "parent","sibling"],
          "index",
          "type",
        ],
      },
    ],
    "import/newline-after-import": [ERROR, { "count": 1 }],
    "semi-spacing": ERROR,
    "spaced-comment": [ERROR, "always", { "block": { "balanced": true } }],
    "object-curly-spacing": [ERROR, "always"],
    "eol-last": [ERROR, "always"],
    /* TypeScript */
    "@typescript-eslint/consistent-type-imports": [ERROR, { "prefer": "type-imports" }],
  },
};
