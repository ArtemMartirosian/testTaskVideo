const gradients = document.querySelectorAll('.gradient');

function updateVideoPositions() {
  gradients.forEach((val) => {
    const video = val.querySelector("video");
    if (video) {
      const offsetTop = -val.offsetTop;
      const offsetLeft = -val.offsetLeft;

      if (window.innerWidth <= 650) {
        video.style.top = -(val.offsetTop/2) + "px";
      } else {
        video.style.top = offsetTop + "px";
      }

      video.style.left = offsetLeft + "px";
    }
  });
}

updateVideoPositions();

window.addEventListener('resize', updateVideoPositions);
