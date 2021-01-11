# eslint-config-sonarqube

ESLint configuration for SonarCloud, SonarQube and its plugins.

## Usage

Install:

```
yarn add --dev \
  eslint-config-sonarqube \
  eslint-plugin-import \
  eslint-plugin-jest \
  eslint-plugin-jsx-a11y \
  eslint-plugin-promise \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint \
  typescript-eslint-parser
```

Configure:

Add `extends: 'sonarqube'` to your local `.eslintrc`
