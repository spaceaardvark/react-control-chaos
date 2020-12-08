/**
 * This is a simple HTML5 video player API designed to be similar to the HTML5 fetch
 * API. It prevents the VideoPlayer React Component from having to do too much and
 * makes unit testing a little easier.
 */

let videoEl;

export const registerVideoElement = (el) => {
  videoEl = el;
}

export const play = () => {
  let result;

  result = videoEl.play()
  if (result) {
    result.catch(console.error);
  }
};

export const pause = () => {
  videoEl.pause();
};

export const seek = (time) => {
  let clamped;

  clamped = Math.max(0, Math.min(time, videoEl.duration));
  videoEl.currentTime = clamped;
};
