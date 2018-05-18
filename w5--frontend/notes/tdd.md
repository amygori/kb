## Jest notes

In order for `import` and other ES2015 features to work, you have to have a `.babelrc` file or include a Babel config in your `package.json`. You also need `babel-preset-env` installed.

```json
{
  "devDependencies": {
    "babel-preset-env": "^1.7.0",
    "jest": "^22.4.3"
  },
  "babel": {
    "presets": [
      "env"
    ]
  }
}
```
