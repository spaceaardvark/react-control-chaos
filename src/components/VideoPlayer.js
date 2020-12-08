import { useEffect, useRef } from "preact/hooks";

import { durationSet, tick, videoPaused, videoStarted, volumeChanged } from "../actions";
import { html } from "../html";
import * as video from "../video";

export const VideoPlayer = ({ dispatch }) => {
  const videoEl = useRef();

  const onLoadedMetadata = () => dispatch(durationSet(videoEl.current.duration));
  const onPause = () => dispatch(videoPaused());
  const onPlay = () => dispatch(videoStarted());
  const onTick = () => dispatch(tick(videoEl.current.currentTime));
  const onVolumeChange = () => dispatch(volumeChanged(videoEl.current.volume));

  useEffect(() => {
    if (videoEl) {
      video.registerVideoElement(videoEl.current);
      videoEl.current.addEventListener("loadedmetadata", onLoadedMetadata);
      videoEl.current.addEventListener("pause", onPause);
      videoEl.current.addEventListener("playing", onPlay);
      videoEl.current.addEventListener("timeupdate", onTick);
      videoEl.current.addEventListener("volumechange", onVolumeChange);
      videoEl.current.addEventListener("waiting", onPause);
    }
  }, [videoEl]);

  return html`
    <div class="player">
      <video src="nasa-flares-480p30.m4v" controls ref=${videoEl}></video>
    </div>
  `;
};