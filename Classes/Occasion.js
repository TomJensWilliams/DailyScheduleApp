const Time = require('./Time');

function Occasion(nameInput, startInput, endInput, colorInput) {
  const name = nameInput;
  const start = startInput;
  const end = endInput;
  const color = colorInput;
  this.getDuration = function () {
    return end.getMinuteTime() - start.getMinuteTime();
  };
  this.tabPreparer = function (tabCount) {
    let output = '';
    for (let index = 0; index < tabCount; index++) {
      output += '\t';
    }
    return output;
  };
  this.prepareString = function (tabCount) {
    return `${this.tabPreparer(
      tabCount
    )}<div class="occassion ${color}" style="flex: ${this.getDuration()}">
${this.tabPreparer(tabCount)}    <h2>${name}</h2>
${this.tabPreparer(tabCount)}</div>`;
  };
}

module.exports = Occasion;
