import { html } from "../html";

export const StatusBar = ({ state }) => {
  let msg, msgClass, seconds;

  if (state.playing) {
    msg = "Playing";
    msgClass = "success";
  } else {
    msg = "Paused";
    msgClass = "info";
  }

  seconds = Math.round(state.position * 10 * (1 + Number.EPSILON)) / 10;

  return html`
    <div class="status">
      <div><span class=${msgClass}>${msg}</span></div>
      <div class="text-right">${seconds} s</div>
    </div>
  `;
};