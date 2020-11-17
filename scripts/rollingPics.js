function InitRollingPics() {
  let rollingPics = document
    .getElementsByClassName("rolling-pics")[0]
    .getElementsByTagName("img");
  let currentImg = 0;

  setImage();

  setInterval(() => setImage(), 5000);

  function setImage() {
    if (currentImg >= rollingPics.length) currentImg = 0;

    for (i = 0; i < rollingPics.length; i++) {
      rollingPics[i].style.opacity = 0;
      rollingPics[i].style.visibility = "hidden";
    }
    rollingPics[currentImg].style.opacity = 1;
    rollingPics[currentImg].style.visibility = "visible";

    currentImg++;
  }
}
