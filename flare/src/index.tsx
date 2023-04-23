import ReactDom from 'react-dom/client';
import { App } from './demo/App/App';
import './tailwind.css';
import { StrictMode } from 'react';

ReactDom.createRoot(document.getElementById('root') as HTMLDivElement).render(<StrictMode><App /></StrictMode>);
