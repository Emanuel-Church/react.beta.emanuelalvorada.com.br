import React from "react";
import ReactDOM from "react-dom/client";
import { SobHeader } from "./sobheader.js";

import "./global.css"

ReactDOM.createRoot(document.getElementById('sobheader')!).render(
  <React.StrictMode>
    <SobHeader/>
  </React.StrictMode>
)
