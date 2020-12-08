import { durationSet, tick, videoPaused, videoStarted, volumeChanged } from "../actions";
import { html } from "../html";
import * as video from "../video";

export const VideoPlayer = ({ dispatch }) => {
  const onReady = (videoEl) => {
    video.registerVideoElement(videoEl);
    dispatch(durationSet(videoEl.duration));
    dispatch(volumeChanged(videoEl.volume, videoEl.muted));
  };

  return html`
    <div class="player">
      <video
        src="nasa-flares-480p30.m4v" controls
        onloadeddata=${(e) => onReady(e.target)}
        onpause=${() => dispatch(videoPaused())}
        onplaying=${() => dispatch(videoStarted())}
        ontimeupdate=${(e) => dispatch(tick(e.target.currentTime))}
        onvolumechange=${(e) => dispatch(volumeChanged(e.target.volume, e.target.muted))}
        onwaiting=${() => dispatch(videoPaused())}
      ></video>
    </div>
  `;
};