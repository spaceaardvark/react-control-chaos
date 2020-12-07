import { useReducer } from "preact/hooks";

import { html } from "../html";
import { reducer, initialState } from "../reducer";

import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";
import { StatusBar } from "./StatusBar";
import { VideoPlayer } from "./VideoPlayer";

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return html`
    <${LeftPanel} state=${state} dispatch=${dispatch} />
    <${VideoPlayer} state=${state} dispatch=${dispatch} />
    <${RightPanel} state=${state} dispatch=${dispatch} />
    <${StatusBar} state=${state} />
  `;
}