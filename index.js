let body = document.querySelector("body");

function move(event) {
  const browserSize = window.innerWidth;
  if (browserSize < 700) {
    body.style.backgroundColor = "skyblue";
  } else if (browserSize > 1000) {
    body.style.backgroundColor = "lightgoldenrodyellow";
  } else {
    body.style.backgroundColor = "purple";
  }
}

function init() {
  window.addEventListener("resize", move);
}
init();
