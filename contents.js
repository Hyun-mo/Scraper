var url = document.location.href;
var backjoon_url = "www.acmicpc.net";
var programmers_url = "school.programmers.co.kr";

function Copy(str) {
  var tempElem = document.createElement("textarea");
  tempElem.value = str;
  document.body.appendChild(tempElem);
  tempElem.select();
  document.execCommand("copy");
  document.body.removeChild(tempElem);
}

function Programmers(url) {
  var el = document.querySelector("#tour2 > div > div");
  var explain = el.innerHTML;
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
  Copy(result);
}

function Backjoon(url) {
  var el = document.querySelector("#problem-body");
  var images = el.querySelectorAll("img");
  images.forEach((el) => {
    el.src = el.src;
  });
  var explain = el.querySelector("#problem_description").innerHTML.trim();
  var input = el.querySelector("#problem_input").innerHTML.trim();
  var output = el.querySelector("#problem_output").innerHTML.trim();
  var link = `[문제 링크](${url})`;
  var result = [
    "## 문제",
    link,
    explain,
    "<hr>",
    "- ### 입력",
    input,
    "- ### 출력",
    output,
    "<hr>",
    "## 풀이",
    ">",
    "## 코드",
    "~~~js",
    "~~~",
  ].join("\n\n");
  Copy(result);
}

if (url.match(backjoon_url)) Backjoon(url);
if (url.match(programmers_url)) Programmers(url);
