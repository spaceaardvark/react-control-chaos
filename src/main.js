import { render } from "preact";

import { App } from "./components/App";
import { html} from "./html";

// Fix for packages that are still checking for process.env.NODE_ENV in ES6 module builds
window.process = { env: { NODE_DEV: "production" } };

render(html`<${App}/>`, document.getElementById("app"));