function logLine() {
  console.log("-----------");
}
function log() {
  console.log(...arguments);
  logLine();
}

var logHandler = {
  get(target, key) {
    logLine();
    console.log("get key: ", key);
    return target[key];
  },
};
