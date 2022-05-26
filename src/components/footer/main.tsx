import React from 'react';
import ReactDOM from 'react-dom/client';
import { MNFooter } from './footer';
import { SubFooter } from './subfooter';
import { Divisor } from "/src/components/cnm/divisor";

import "/src/assets/styles/global.css";

ReactDOM.createRoot(document.getElementById('id-footer')!).render(
  <React.StrictMode>
    <Divisor/>
    <MNFooter/>
    <Divisor/>
    <SubFooter/>
  </React.StrictMode>
)