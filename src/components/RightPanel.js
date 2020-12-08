import { setPlaying } from "../actions";
import { html } from "../html";

export const RightPanel = ({ state, dispatch }) => {
  const onChange = (e) => dispatch(setPlaying(e.target.value === "playing"));

  return html`
    <div class="panel right">
      <div class="form-group">
        <select onchange=${onChange}>
          <option value="paused" selected=${!state.playing}>Paused</option>
          <option value="playing" selected=${state.playing}>Playing</option>
        </select>
      </div>
    </div>
  `;
};
