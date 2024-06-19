import { StrictMode } from 'react';
import {createRoot} from 'react-dom/client'
import App from './App'
import "./index.css"

const $div = document.getElementById("root")!;

const root = createRoot($div);

root.render(<StrictMode>
  <App />
</StrictMode>);

