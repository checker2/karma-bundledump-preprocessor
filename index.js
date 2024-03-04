/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

// Karma preprocessor for saving test bundles into *.dump files.
//
// Configuration (karma.conf.js):
//
// module.exports = function (config) {
//   config.set({
//     plugins: [
//       require("karma-bundledump-preprocessor"),
//     ],
//     preprocessors: {
//       "**/*.js": ["bundledump"],
//     },
//   });
// };

const path = require("path");
const fs = require("fs");

function createPreprocessor(args, config, logger, helper) {
  const log = logger.create("preprocessor.bundledump");

  return function (content, file, done) {
    const originalPath = file.originalPath;
    const location = path.relative(config.basePath, originalPath);

    log.info("Dumping bundle into ./%s.dump", location);

    const fd = fs.openSync(location + ".dump", "w");
    fs.writeSync(fd, content);
    fs.closeSync(fd);
 
    done(content);
  };
}

module.exports = {
  "preprocessor:bundledump": ["factory", createPreprocessor],
};
