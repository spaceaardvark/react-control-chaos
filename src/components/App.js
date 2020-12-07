import { useThunkReducer } from "react-hook-thunk-reducer";

import { html } from "../html";
import { reducer, initialState } from "../reducer";

import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";
import { StatusBar } from "./StatusBar";
import { VideoPlayer } from "./VideoPlayer";

export const App = () => {
  const [state, dispatch] = useThunkReducer(reducer, initialState);

  return html`
    <${LeftPanel} state=${state} dispatch=${dispatch} />
    <${VideoPlayer} state=${state} dispatch=${dispatch} />
    <${RightPanel} state=${state} dispatch=${dispatch} />
    <${StatusBar} state=${state} />
  `;
}