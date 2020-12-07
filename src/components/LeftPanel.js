import { setPlaying } from "../actions";
import { html } from "../html";

export const LeftPanel = ({ state, dispatch }) => {
  const onClick = (e) => dispatch(setPlaying(e.target.checked));

  return html`
    <div class="panel left">
      <div class="form-group">
        <label>
          <input 
            type="checkbox"
            checked=${state.playing ? "checked" : null}
            onclick=${onClick}
          /> Playing
        </label>
      </div>
    </div>
  `;
};