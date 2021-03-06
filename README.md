# eslint-config-sonarqube

ESLint configuration for SonarCloud, SonarQube and its plugins.

## Usage

Install:

```
yarn add --dev \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-sonarqube \
  eslint-plugin-import \
  eslint-plugin-jest \
  eslint-plugin-jsx-a11y \
  eslint-plugin-promise \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
```

Configure:

Add `extends: 'sonarqube'` to your local `.eslintrc`

Release:

1. Update the version in `package.json`
2. Commit the change with a version message: `git commit -m "vx.y.z"`
3. Tag the commit with the version : `git tag vx.y.z`
4. Publish on npm: `yarn publish`
