import { html } from "../html";

import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";
import { VideoPlayer } from "./VideoPlayer";

const appReducer = (action, state) => {

};

export const App = () =>
  html`
    <${LeftPanel} />
    <${VideoPlayer} />
    <${RightPanel} />
  `;