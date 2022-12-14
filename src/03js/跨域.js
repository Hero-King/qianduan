{
  let root = document.getElementById("root");
  console.log("获取id为root的元素: ", root);
  let kuayujsdiv = document.createElement("div");
  kuayujsdiv.innerText = "我是跨域.js 创建的div";
  kuayujsdiv.onclick = function (e) {
    fetch("http://localhost:5501/src/03js/跨域.js").then((i) => console.log(i));
    fetch("http://192.168.1.200/跨域2.js").then((i) => console.log(i));
  };
  let id = "kuayujs-create";
  kuayujsdiv.id = id;
  document.body.appendChild(kuayujsdiv);
}
