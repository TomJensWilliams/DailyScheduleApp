const FileHandler = require('../FileHandler');

let day = {
  name: 'the day',
  length: '24 hours',
};

let myFileHandler = new FileHandler();
myFileHandler.writeFile('testText.tst', JSON.stringify(day));
