console.log("你已经被植入了脚本");
let iframes = document.querySelectorAll("iframe");
console.log(iframes)
for (let i = 0; i < iframes.length; i++) {
  iframes[i].style.border = "10px solid green"
  //iframes[i].src.indexOf()
  iframes[i].style.display = "none"
}
var xhr = new XMLHttpRequest();
// http-> http
// https -> http
xhr.open("GET", "https://localhost/1704/chromeExtensions/home.php", true);
//xhr.open("GET", "http://www.tuling123.com/openapi/api?key=c75ba576f50ddaa5fd2a87615d144ecf&info=%E5%A7%9A%E6%98%8E", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    console.log(xhr.responseText)
  }
}
xhr.send();
