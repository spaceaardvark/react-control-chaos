import { useMemo } from "preact/hooks";

import { setPlaying, setMuted, setVolume, setPosition } from "../actions";
import { html } from "../html";

const MED = 0.33;
const HIGH = 0.66;

export const LeftPanel = ({ state, dispatch }) => {

  const onPositionChange = (e) => {
    const val = Number(e.target.value);
    if (!isNaN(val)) {
      if (val >= 0 && val <= state.duration) {
        dispatch(setPosition(val));
      }
    }
  };

  const range1 = useMemo(() => state.volume < MED, [state.volume]);
  const range2 = useMemo(() => state.volume >= MED && state.volume < HIGH, [state.volume]);
  const range3 = useMemo(() => state.volume >= HIGH, [state.volume]);

  return html`
    <div class="panel left">
    
      <div class="form-group">
        <label>
          <input
            type="checkbox"
            checked=${state.playing}
            onclick=${(e) => dispatch(setPlaying(e.target.checked))}
          /> Playing
        </label>
      </div>
    
      <div class="form-group">
        <label>
          <input
            type="checkbox"
            checked=${state.muted}
            onclick=${(e) => dispatch(setMuted(e.target.checked))}
          /> Muted
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

      <div class="form-group">
        <label for="position">Position</label>
        <input
          id="position"
          type="text"
          value=${state.position}
          onchange=${onPositionChange}
        />
      </div>

    </div>
  `;
};