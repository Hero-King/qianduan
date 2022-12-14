{
  let kuayujsdiv = document.createElement("div");
  kuayujsdiv.innerText = "我是跨域2.js 创建的div";
  let id = "kuayujs2-create";
  kuayujsdiv.onclick = function (e) {
    fetch("http://localhost:5501/src/03js/跨域.js").then((i) => console.log(i));
    fetch("http://192.168.1.200/跨域2.js").then((i) => console.log(i));
  };
  kuayujsdiv.id = id;
  document.body.appendChild(kuayujsdiv);
}

console.log(
  "我要去获取跨域脚本1 创建的div了",
  document.getElementById("kuayujs-create")
);
