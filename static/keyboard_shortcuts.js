document.addEventListener("keydown", (event) => {
  let updateNeeded = false;

  if (event.shiftKey) {
    switch (event.key) {
      case "ArrowUp":
        positionSlider.value = parseInt(positionSlider.value) + 1;
        updateNeeded = true;
        break;
      case "ArrowDown":
        positionSlider.value = parseInt(positionSlider.value) - 1;
        updateNeeded = true;
        break;
      case "ArrowRight":
        channelSlider.value = parseInt(channelSlider.value) + 1;
        updateNeeded = true;
        break;
      case "ArrowLeft":
        channelSlider.value = parseInt(channelSlider.value) - 1;
        updateNeeded = true;
        break;
    }
  } else if (event.altKey) {
    switch (event.key) {
      case "ArrowUp":
        timeframeSlider.value = parseInt(timeframeSlider.value) + 1;
        updateNeeded = true;
        break;
      case "ArrowDown":
        timeframeSlider.value = parseInt(timeframeSlider.value) - 1;
        updateNeeded = true;
        break;
      case "ArrowRight":
        particleSlider.value = parseInt(particleSlider.value) + 1;
        updateNeeded = true;
        break;
      case "ArrowLeft":
        particleSlider.value = parseInt(particleSlider.value) - 1;
        updateNeeded = true;
        break;
    }
  }

  if (updateNeeded) {
    updateImage();
  }
});
