import { useMemo } from "preact/hooks";
import { setPlaying, setVolume, setPosition } from "../actions";
import { debounce } from "../debounce";
import { html } from "../html";

export const RightPanel = ({ state, dispatch }) => {

  const onPlayingChange = (e) => dispatch(setPlaying(e.target.value === "playing"));
  const onVolumeChange = debounce((e) => {
    const val = Number(e.target.value);
    if (!isNaN(val) && val >= 0 && val <= 1) {
      dispatch(setVolume(val));
    }
  }, 500);

  const p25 = useMemo(() => Math.floor(state.duration / 4), [state.duration]);
  const p50 = useMemo(() => Math.floor(state.duration / 2), [state.duration]);
  const p75 = useMemo(() => Math.floor(3 * state.duration / 4), [state.duration]);

  const p0to25 = useMemo(
    () => state.position < p25, 
    [state.position, p25]
  );
  const p25to50 = useMemo(
    () => state.position >= p25 && state.position < p50, 
    [state.position, p25, p50]
  );
  const p50to75 = useMemo(
    () => state.position >= p50 && state.position < p75,
    [state.position, p50, p75]
  );
  const p75to100 = useMemo(
    () => state.position >= p75,
    [state.position, p75]
  );

  return html`
    <div class="panel right">

      <div class="form-group">
        <select onchange=${onPlayingChange}>
          <option value="paused" selected=${!state.playing}>Paused</option>
          <option value="playing" selected=${state.playing}>Playing</option>
        </select>
      </div>

      <div class="form-group">
        <label for="volume">Volume</label>
        <input
          id="volume"
          type="text"
          value=${state.volume}
          onchange=${onVolumeChange}
        />
      </div>

      <div class="form-group">
        <label>Position</label><br/>
        <label>
          <input
            type="radio" name="position" value="p0to25"
            checked=${p0to25}
            onclick=${() => dispatch(setPosition(0))}
          /> 0-25%
        </label><br/>
        <label>
          <input
            type="radio" name="position" value="p25to50"
            checked=${p25to50}
            onclick=${() => dispatch(setPosition(p25))}
          /> 25-50%
        </label><br/>
        <label>
          <input
            type="radio" name="position" value="p50to75"
            checked=${p50to75}
            onclick=${() => dispatch(setPosition(p50))}
          /> 50-75%
        </label><br/>
        <label>
          <input
            type="radio" name="position" value="p75to100"
            checked=${p75to100}
            onclick=${() => dispatch(setPosition(p75))}
          /> 75-100%
        </label><br/>
      </div>

    </div>
  `;
};
