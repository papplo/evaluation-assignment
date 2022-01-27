import ReactDom from 'react-dom';
import '@picocss/pico'
import './app.css';

import { App } from './app';

const app = document.getElementById('app');
ReactDom.render(<App />, app);
