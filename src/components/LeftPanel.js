import { setPlaying, setMuted } from "../actions";
import { html } from "../html";

export const LeftPanel = ({ state, dispatch }) => {
  const onPlayingChange = (e) => dispatch(setPlaying(e.target.checked));
  const onMuted = (e) => dispatch(setMuted(e.target.checked));

  return html`
    <div class="panel left">
    
      <div class="form-group">
        <label>
          <input type="checkbox" checked=${state.playing} onclick=${onPlayingChange} /> Playing
        </label>
      </div>
    
      <div class="form-group">
        <label>
          <input type="checkbox" checked=${state.muted} onclick=${onMuted} /> Muted
        </label>
      </div>

    </div>
  `;
};