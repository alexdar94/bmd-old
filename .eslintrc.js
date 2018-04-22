module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "src/"]
      }
    }
  },
  "env": {
    "browser": true,
    "node": true,
  },
  "rules": {
    "no-console": 0,

    "curly": ["error", "multi-or-nest", "consistent"],
    "object-curly-newline": ["error", { "consistent": true }],
    "no-mixed-operators": 0,
    "no-param-reassign": 0,
    "consistent-return": 0,
    "no-plusplus": 0,
    "no-bitwise": 0,
    "camelcase": 0,
    "no-shadow": 0,

    // Consider enabling these rules over time
    "import/prefer-default-export": 0,
    "import/first": 0,

    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,
    "react/no-unused-prop-types": 0,
    "react/prop-types": 0,
    "react/require-default-props": 0,

    "no-nested-ternary": 0,
    "no-case-declarations": 0,
    "max-len": 0,
    "react/no-array-index-key": 0,
    "import/no-extraneous-dependencies": 0,
    "no-unused-vars": 0,
    "no-underscore-dangle": 0,
    "class-methods-use-this": 0,
    "react/no-multi-comp": 0,
    "no-confusing-arrow": 0,
    "react/sort-comp": 0,
    "func-names": 0,
    "react/forbid-prop-types": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/no-did-mount-set-state": 0,
    "no-return-assign": 0,
  },
};