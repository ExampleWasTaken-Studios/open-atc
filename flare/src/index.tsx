import ReactDom from 'react-dom/client';
import { App } from './components/App/App';
import './tailwind.css';

ReactDom.createRoot(document.getElementById('root') as HTMLDivElement).render(<App />);
