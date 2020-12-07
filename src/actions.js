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
export const volumeChanged = (volume) => ({
  type: VOLUME_CHANGED,
  payload: {
    volume
  },
});

export const TICK = "TICK";
export const tick = (position) => ({
  type: TICK,
  payload: {
    position
  }
});