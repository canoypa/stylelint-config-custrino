# StyleLint Config Custrino

A personally created StyleLint shareable configuration set.

## Installation

```shell
$ npm install --save-dev stylelint-config-custrino
```

## Usage

Used by specifying in the `extends` section of the StyleLint configuration.

```jsonc
{
  "extends": ["stylelint-config-custrino", "stylelint-config-custrino/xxxx"]
}
```

### Additional configurations

Additional configurations can be used depending on the project.

You need to add a corresponding plugin.

#### `stylelint-config-custrino/scss`

This configuration enables the rules for SCSS.

Add required plugins:

```shell
$ npm install --save-dev stylelint-scss
```

#### `stylelint-config-custrino/css-in-js`

This configuration enables the rules for CSS in JS.
