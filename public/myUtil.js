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

/**
 * 根据文件名判断是否是图片格式
 * @param {string} name
 * @returns Boolean
 */
function checkImgType(name) {
  if (
    !/\.(bmp|jpg|png|tif|gif|pcx|tga|exif|fpx|svg|psd|cdr|pcd|dxf|ufo|eps|ai|raw|WMF|webp|jpeg)$/.test(
      name.toLowerCase()
    )
  ) {
    return false;
  } else {
    return true;
  }
}
