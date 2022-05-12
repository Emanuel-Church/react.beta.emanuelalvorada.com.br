import React from "react";
import ReactDOM from "react-dom/client";
import { SobHeader } from "./sobheader";
import { SubFooter } from "./subfooter";

import "./global.css"

ReactDOM.createRoot(document.getElementById('sobheader')!).render(
  <React.StrictMode>
    <SobHeader/>
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('subfooter')!).render(
  <React.StrictMode>
    <SubFooter/>
  </React.StrictMode>
)