import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App'
import './index.css';
// This is the ID of the div in your index.html file

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);