import { setPlaying, setMuted, setVolume } from "../actions";
import { html } from "../html";

const MED = 0.33;
const HIGH = 0.66;

export const LeftPanel = ({ state, dispatch }) => {
  const onPlayingChange = (e) => dispatch(setPlaying(e.target.checked));
  const onMuted = (e) => dispatch(setMuted(e.target.checked));

  const range1 = state.volume < MED;
  const range2 = state.volume >= MED && state.volume < HIGH;
  const range3 = state.volume >= HIGH;

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

      <div class="form-group">
        <label>Volume</label><br/>
        <label>
          <input
            type="radio" name="volume" value="low"
            checked=${range1}
            onclick=${() => dispatch(setVolume(0.3))}
          /> Low
        </label><br/>
        <label>
          <input
            type="radio" name="volume" value="medium"
            checked=${range2}
            onclick=${() => dispatch(setVolume(0.6))}
          /> Medium
        </label><br/>
        <label>
          <input
            type="radio" name="volume" value="high"
            checked=${range3}
            onclick=${() => dispatch(setVolume(1))}
          /> High
        </label>
      </div>

    </div>
  `;
};