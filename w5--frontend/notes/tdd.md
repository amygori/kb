## Jest notes

In order for `import` and other ES2015 features to work, you have to have a `.babelrc` file or include a Babel config in your `package.json`. You also need `babel-jest` and `babel-preset-env` installed.

Sample .babelrc:

```
{
  "presets": [
    "env"
  ]
}
```
