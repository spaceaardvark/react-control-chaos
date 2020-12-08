import { clamp } from "./clamp";
import * as video from "./video";

// PASSIVE ACTIONS -- THINGS THAT HAVE HAPPENED

export const DURATION_SET = "DURATION_SET";
export const durationSet = (duration) => ({
  type: DURATION_SET,
  payload: {
    duration
  }
});

export const VIDEO_STARTED = "VIDEO_STARTED";
export const videoStarted = () => ({
  type: VIDEO_STARTED
});

export const VIDEO_PAUSED = "VIDEO_PAUSED";
export const videoPaused = () => ({
  type: VIDEO_PAUSED
});

export const VOLUME_CHANGED = "VOLUME_CHANGED";
export const volumeChanged = (volume, muted) => ({
  type: VOLUME_CHANGED,
  payload: {
    volume,
    muted
  },
});

export const TICK = "TICK";
export const tick = (position) => ({
  type: TICK,
  payload: {
    position
  }
});

// ACTIVE ACTIONS -- THINGS THAT NEED TO HAPPEN

export const setPlaying = (playing) => (dispatch) => {
  if (playing) {
    video.play();
    // play() is a request, so we do not change the state
  } else {
    video.pause();
    dispatch(videoPaused());
  }
};

export const setVolume = (level) => () => {
  level = clamp(0, 1, level);
  video.setVolume(level);
};

export const setMuted = (muted) => () => {
  video.setMuted(muted);
};

export const setPosition = (position) => () => {
  video.setPosition(position);
}