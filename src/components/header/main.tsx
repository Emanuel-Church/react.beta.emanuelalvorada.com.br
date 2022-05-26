import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from ".";
import { Divisor } from "../cnm/divisor";
import { SobHeader } from "./sob/";

import "/src/assets/styles/global.css";

ReactDOM.createRoot(document.getElementById("header")!).render(
  <React.StrictMode>
    <SobHeader />
    <Divisor />
    <Header />
    <Divisor />
  </React.StrictMode>
);
