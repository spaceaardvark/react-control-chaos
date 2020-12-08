import {
  DURATION_SET, TICK, VIDEO_PAUSED, VIDEO_STARTED, VOLUME_CHANGED,
} from "./actions";

export const initialState = {
  duration: 0,
  playing: false,
  position: 0,
  volume: 0,
  muted: false,
};

export const reducer = (state, action) => {
  console.log("⚡", action.type);

  const inner = (state, action) => {
    switch (action.type) {
      case DURATION_SET:
        return { ...state, duration: action.payload.duration };
      case TICK:
        return { ...state, position: action.payload.position };
      case VIDEO_STARTED:
        return { ...state, playing: true };
      case VIDEO_PAUSED:
        return { ...state, playing: false };
      case VOLUME_CHANGED:
        return { ...state, volume: action.payload.volume, muted: action.payload.muted };
      default:
        console.error("Unrecognized action in reducer:", action);
        return state;
    }
  };

  const result = inner(state, action);
  console.log(result);

  return result;
};