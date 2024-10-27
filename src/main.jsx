import { createRoot } from 'react-dom/client';
import App from '@/App.jsx';
import '@/styles/Global.scss';

let html_root = document.getElementById('root');
let root = createRoot(html_root);
root.render(<App />);