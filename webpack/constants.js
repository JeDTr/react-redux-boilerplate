const path = require("path");

const rootPath = path.dirname(__dirname);

module.exports = {
  appPath: path.join(rootPath, "app"),
  outputPath: path.join(rootPath, "dist"),
};
