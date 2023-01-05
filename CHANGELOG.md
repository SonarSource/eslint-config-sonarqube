# 2.1.1 (2023-01-05)

Rules changes:

- Remove react/no-array-index-key which is already reported in sonarjs 9.12.0

# 2.1.0 (2022-05-31)

New plugins for RTL:

- Add plugin eslint-plugin-jest-dom with recommended ruleset
- Add plugin eslint-plugin-testing-library with recommended ruleset

# 2.0.0 (2022-05-31)

Breaking changes:

- Raise minimum nodejs version from v10.12 to v12.22
- Upgrade eslint from v7 to v8

Plugins updates:

- Raise minimum version of eslint-plugin-import to v2.25
- Raise minimum version of eslint-plugin-jsx-a11y v6.5
- Raise minimum version of eslint-plugin-promise v6
- Raise minimum version of eslint-plugin-react v7.30
- Raise minimum version of eslint-plugin-react-hooks v4.3
- Raise minimum version of eslint-plugin-jest v26.1

Rules changes:

- Replace jest/no-if by jest/no-conditional-in-test in warn mode instead of error
- Add jest/prefer-equality-matcher
- Add jest/prefer-comparison-matcher
- Add react/hook-use-state
- Add react/no-arrow-function-lifecycle
- Add react/no-namespace
- Disable react/jsx-no-leaked-render due to too many FP
- allowExpressions in react/jsx-no-useless-fragment

# 1.1.0 (2022-05-24)

- Bump eslint-plugin-jest to v25 ([#9](https://github.com/SonarSource/eslint-config-sonarqube/pull/9))
  - Drop jest/prefer-to-be-null
  - Drop jest/prefer-to-be-undefined
