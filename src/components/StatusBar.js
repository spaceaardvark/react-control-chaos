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

  seconds = Math.floor(state.position);

  return html`
    <div class="status">
      <div><span class=${msgClass}>${msg}</span></div>
      <div class="text-right">${seconds} s</div>
    </div>
  `;
};