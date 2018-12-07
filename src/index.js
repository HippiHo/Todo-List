import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";

import "@fortawesome/fontawesome-free/css/all.css";
import "./sass/style.scss";

render(<Router />, document.querySelector("#main"));
