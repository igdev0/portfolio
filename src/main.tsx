import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {MainCSS} from './main.ts';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <MainCSS/>
      <App/>
    </React.StrictMode>,
);
