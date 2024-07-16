const fs = require('node:fs');

function FileHandler() {
  this.readFile = function (fileName) {
    try {
      return fs.readFileSync(fileName, 'utf8');
    } catch (err) {
      console.error(err);
    }
  };
  this.writeFile = function (fileName, fileContents) {
    try {
      fs.writeFileSync(fileName, fileContents);
    } catch (err) {
      console.error(err);
    }
  };
}

module.exports = FileHandler;
