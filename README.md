# karma-bundledump-preprocessor

Karma preprocessor for saving test bundles into `.dump` files.

## Installation

Using npm:

```bash
npm install karma-bundledump-preprocessor --save-dev
```

## Configuration

Following code shows the default configuration:

```js
// karma.conf.js
module.exports = function (config) {
  config.set({
    plugins: [
      require("karma-bundledump-preprocessor"),
    ],
    preprocessors: {
      "**/*.js": ["bundledump"],
    },
  });
};
```

_Note. Karma will execute the preprocessors over the files in the order they are listed. Make sure that the `bundledump` is the last preprocessor in the `preprocessors` array._

## How does it work ?

Karma preprocessors mutate the content of the test files. This preprocessor saves the final test bundle to a `.dump` file before it is loaded into the browser. Then you can inspect the dump file for build errors or other errors.

---

For more information on Karma see the [homepage](https://karma-runner.github.io/).
