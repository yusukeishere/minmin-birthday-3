'use strict'

const button = document.querySelector('#show-button');
const videoBox = document.querySelector('#video-box');
const video = document.querySelector('#my-video');

button.addEventListener('click', () => {
  button.style.display = 'none';
  videoBox.style.display = 'block';
  video.play();
});