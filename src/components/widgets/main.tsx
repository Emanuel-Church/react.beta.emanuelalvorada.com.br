import React from 'react';
import ReactDOM from 'react-dom/client';

import { AlertCookies } from './alertcookies';
import { SlowTop } from './slowtop';

import "/src/assets/styles/global.css";
import "/src/assets/styles/tgFC18gU/hQI8v81zJN.css";

ReactDOM.createRoot(document.getElementById('widget')!).render(
  <React.StrictMode>
    <>
        <SlowTop/>
        <AlertCookies/>
    </>
  </React.StrictMode>
)