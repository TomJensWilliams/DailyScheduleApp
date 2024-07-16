const FileHandler = require('./FileHandler');

function DayPreparer() {
  const myFileHandler = new FileHandler();
  this.prepareHTMLString = function (titleInput) {
    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="styles.css">
    <title>${titleInput}</title>
</head>
<body>
    <div id="all-columns">
        <div id="column-one">
        </div>
        <div id="column-two">
        </div>
        <div id="column-three">
        </div>
        <div id="column-four">
        </div>
    </div>
</body>
</html>`;
  };
  this.writeDayToFile = function (fileNameInput) {
    myFileHandler.writeFile(fileNameInput, this.prepareHTMLString());
  };
}

module.exports = DayPreparer;
