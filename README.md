# @zeebats/stylelint-config

<p align="center">
    <img src="https://img.shields.io/badge/release-1.0.x-brightgreen" alt="Release">
    <img src="https://img.shields.io/badge/stylelint-%5E14-blue" alt="Stylelint">
    <a href="https://www.npmjs.com/package/@zeebats/stylelint-config"><img src="https://img.shields.io/npm/v/@zeebats/stylelint-config.svg" alt="NPM version"></a>
</p>

This is a shareable config for [Stylelint](https://stylelint.io/). All the rules and configurations are already set. Rules can be overridden if needed.

- [@zeebats/stylelint-config](#zeebatsstylelint-config)
  - [:package: Installing](#package-installing)
  - [:firecracker: Turning off rules](#firecracker-turning-off-rules)
  - [:rocket: CLI usage](#rocket-cli-usage)
  - [:pencil2: Editor / IDE integration](#pencil2-editor--ide-integration)
    - [Visual Studio Code](#visual-studio-code)
      - [Autofix](#autofix)
      - [Additional Extensions](#additional-extensions)

## :package: Installing

Include the config into your project:

```shell
npm install @zeebats/stylelint-config --save-dev --save-exact
```

Then install the dependencies that the config needs:

```shell
npx install-peerdeps --dev --extra-args="-E" @zeebats/stylelint-config
```

In your project, create a `.stylelintrc.json` file with the following contents:

```json
{
  "extends": ["@zeebats/stylelint-config"]
}
```

## :firecracker: Turning off rules

To turn off a rule, you can set the value of the rule to `null` in your `.stylelintrc.json` file:

```json
{
  "extends": ["@zeebats/stylelint-config"],
  "rules": {
    "declaration-no-important": null
  }
}
```

Or when you only need to turn off a rule for a specific line, use the `/* stylelint-disable-line */` comment, followed by the rule:

```css
color: #fff !important; /* stylelint-disable-line declaration-no-important */
```

More about disabling Stylelint rules can be found [here](https://stylelint.io/user-guide/ignore-code/).

## :rocket: CLI usage

To use Stylelint in the command-line, add the following scripts to your projects `package.json`:

```json
"scripts": {
  "stylelint": "stylelint 'path/to/your/assets/**/*.{css,scss,vue}'",
  "stylelint:fix": "npm run stylelint -- --fix",
}
```

You can run the commands with:
```shell
npm run stylelint
npm run stylelint:fix
```

## :pencil2: Editor / IDE integration

For Stylelint to work, you need to set up your editor / IDE.

### Visual Studio Code

1. Install the [Stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
2. Get linting :rocket:

#### Autofix

If you want Visual Studio Code to autofix your code on save, add this snippet to your `settings.json` file:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  }
}
```

#### Additional Extensions

- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) to get inline error messages

> :warning: If you have the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension enabled, make sure to **disable** the extension for your project's workspace. This is because Prettier's rules will conflict with ours.
