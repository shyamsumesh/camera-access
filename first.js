navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    const video = document.getElementById('yourVideoElement');
    video.srcObject = stream;
  })
  .catch((error) => {
    console.error('Error accessing webcam:', error);
  });
