function move() {
  let width = 0;
  let interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width++;
      document.getElementById("progress-bar").style.width = width + "%";
    }
  }, 50);
}
