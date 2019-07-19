module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
    "plugin:sonarjs/recommended"
  ],

  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },

  parser: "@typescript-eslint/parser",

  plugins: ["import", "jsx-a11y", "react", "react-hooks", "promise", "sonarjs"],

  rules: {
    // possible errors
    "for-direction": "error",
    "no-prototype-builtins": "error",
    "no-template-curly-in-string": "error",
    "no-unsafe-negation": "error",

    // best practices
    // TODO turn all rules to "error" eventually
    "array-callback-return": "error",
    "block-scoped-var": "error",
    complexity: "warn",
    curly: "error",
    "consistent-return": "warn",
    eqeqeq: ["error", "smart"],
    "guard-for-in": "error",
    "no-alert": "error",
    "no-caller": "error",
    "no-console": "error",
    "no-div-regex": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-new": "warn",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-proto": "error",
    "no-restricted-properties": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-with": "error",
    radix: "error",
    "require-await": "error",
    "wrap-iife": "error",
    yoda: "error",

    // stylistic
    camelcase: "warn",
    "consistent-this": ["warn", "that"],
    "func-name-matching": "error",
    "func-style": ["warn", "declaration", { allowArrowFunctions: true }],
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true }
    ],
    "max-depth": "warn",
    "max-lines": ["warn", 1000],
    "max-params": ["warn", 4],
    "no-array-constructor": "warn",
    "no-bitwise": "warn",
    "no-lonely-if": "error",
    "no-multi-assign": "warn",
    "no-nested-ternary": "warn",
    "no-new-object": "warn",
    "no-underscore-dangle": "warn",
    "no-unneeded-ternary": "warn",
    "one-var": ["warn", "never"],
    "operator-assignment": "warn",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: ["class", "function"] },
      { blankLine: "always", prev: ["class", "function"], next: "*" }
    ],

    // es2015
    "no-duplicate-imports": "error",
    "no-useless-computed-key": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": ["warn", { object: true, array: false }],
    "prefer-numeric-literals": "warn",
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",

    // disabled because of the usage of typescript-eslint-parser
    // https://github.com/eslint/typescript-eslint-parser/issues/77
    "no-undef": "off",
    "no-unused-vars": "off",

    // import
    "import/extensions": ["error", "never", { json: "always", md: "always" }],
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-absolute-path": "error",
    "import/no-amd": "error",
    "import/no-deprecated": "error",
    "import/no-duplicates": "error",
    "import/no-dynamic-require": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-named-default": "error",
    "import/no-webpack-loader-syntax": "error",
    "import/no-useless-path-segments": ["error", { noUselessIndex: true }],

    // does not properly work with ts
    "import/no-unresolved": "off",

    // disabled because it's way too slow
    /* "import/no-unused-modules": [
      "error",
      { missingExports: false, unusedExports: true }
    ], */

    // react
    // TODO turn all rules to "error" eventually
    "react/button-has-type": "warn",
    "react/display-name": "warn",
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-no-comment-textnodes": "warn",
    "react/jsx-no-target-blank": "warn",
    "react/jsx-pascal-case": "error",
    "react/jsx-sort-default-props": "warn",
    "react/jsx-sort-props": "warn",
    "react/jsx-fragments": ["warn", "syntax"],
    "react/jsx-curly-spacing": [
      "error",
      { when: "never", allowMultiline: true }
    ],
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "never" }
    ],
    "react/no-access-state-in-setstate": "warn",
    "react/no-deprecated": "warn",
    "react/no-find-dom-node": "warn",
    "react/no-string-refs": "warn",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unused-state": "warn",
    "react/self-closing-comp": "error",
    "react/sort-comp": [
      "error",
      {
        order: [
          "type-annotations",
          "instance-variables",
          "static-methods",
          "lifecycle",
          "everything-else",
          "rendering"
        ],
        groups: { rendering: ["/^render.+$/", "render"] }
      }
    ],

    // turn off prop types validation, better use ts ;)
    "react/prop-types": "off",

    // react hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // jsx-a11y
    "jsx-a11y/anchor-has-content": "warn",
    "jsx-a11y/control-has-associated-label": "warn",
    "jsx-a11y/label-has-associated-control": "warn",
    "jsx-a11y/no-noninteractive-tabindex": "warn",
    "jsx-a11y/no-redundant-roles": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",

    "jsx-a11y/accessible-emoji": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    // has FPs
    "jsx-a11y/label-has-for": "off",

    // promise
    "promise/catch-or-return": ["warn", { allowThen: true }],
    "promise/no-return-wrap": ["error", { allowReject: true }],
    "promise/always-return": "off",
    "promise/avoid-new": "off",

    // sonarjs
    "sonarjs/cognitive-complexity": "warn",
    "sonarjs/no-duplicate-string": "warn",
    "sonarjs/no-identical-functions": "warn"
  },

  settings: {
    "import/ignore": ["node_modules"],

    react: {
      version: "16.8"
    }
  }
};
