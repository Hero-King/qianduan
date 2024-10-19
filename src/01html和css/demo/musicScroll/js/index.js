// 音频数据格式化
const formatData = (lyrics) => {
  // 提取时间戳和歌词的正则表达式
  const regex = /\[(\d{2}):(\d{2}\.\d{2})\](.*)/g;
  let result;
  const parsedLyrics = [];

  // 遍历歌词数据并解析出时间和对应的内容
  while ((result = regex.exec(lyrics)) !== null) {
    const minutes = parseInt(result[1], 10);
    const seconds = parseFloat(result[2]);
    const timeInSeconds = minutes * 60 + seconds; // 转换为总秒数
    const text = result[3].trim(); // 去除多余空格

    // 将时间和歌词内容存入数组
    parsedLyrics.push({ time: timeInSeconds, text });
  }
  return parsedLyrics;
};

// 创建歌词节点
const genderTextNode = function (data) {
  data.forEach((i) => {
    const divDom = document.createElement("div");
    divDom.innerText = i.text;
    divDom.className = "text";
    contentDom.appendChild(divDom);
  });
};

const contentDom = document.getElementsByClassName("content")[0];
const container = document.getElementsByClassName("container")[0];
const audio = document.getElementById("audio");
const data = formatData(lrc);
genderTextNode(data);
const textHeight = contentDom.children[0].offsetHeight;
const contentHeight = contentDom.offsetHeight;
const halfHeight = container.offsetHeight / 2;
audio.volume = 0.1;

function findActiveIndex() {
  const cur = audio.currentTime;
  return data.findIndex((i) => i.time > cur) - 1;
}

let oldActiveIndex = -1;
function updateDom() {
  const activeIndex = findActiveIndex();
  if (oldActiveIndex !== activeIndex) {
    Array.from(contentDom.children).forEach((i) => {
      i.classList.remove("active");
    });
    const activeDom = contentDom.children[activeIndex];
    if (activeDom) {
      activeDom?.classList.add("active");
      // 确保歌词居中
      if (activeDom.offsetTop > halfHeight) {
        contentDom.style.transform = `translateY(-${
          activeDom.offsetTop - halfHeight
        }px)`;
      } else {
        contentDom.style.transform = "translateY(0)";
      }
    }
  }
  oldActiveIndex = activeIndex;
}

audio.addEventListener("timeupdate", updateDom);
