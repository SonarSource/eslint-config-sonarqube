# eslint-config-sonarqube

ESLint configuration for SonarQube and its plugins.

## Usage

Install:

```
yarn add --dev \
  eslint-config-sonarqube \
  eslint-plugin-import \
  eslint-plugin-jsx-a11y \
  eslint-plugin-promise \
  eslint-plugin-react \
  eslint-plugin-sonarjs \
  eslint \
  typescript-eslint-parser
```

Configure:

Add `extends: 'sonarqube'` to your local `.eslintrc`
