function Time(hourInput, minuteInput) {
  const hour = hourInput;
  const minute = minuteInput;
  this.getMinuteTime = function () {
    return hour * 60 + minute;
  };
}

modules.export = Time;
