var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  blur.style.left = dets.x - 175 + "px";
  blur.style.top = dets.y - 175 + "px";
});
