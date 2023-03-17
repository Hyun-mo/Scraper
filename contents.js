var el = document.querySelector("#tour2 > div > div");
var explain = el.innerHTML;
var url = document.location.href;
var link = `[문제 링크](${url})`;
var result = [
  "## 문제",
  link,
  explain,
  "## 풀이",
  ">",
  "## 코드",
  "~~~js",
  "~~~",
].join("\n\n");
var tempElem = document.createElement("textarea");
tempElem.value = result;
document.body.appendChild(tempElem);
tempElem.select();
document.execCommand("copy");
document.body.removeChild(tempElem);
