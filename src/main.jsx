import { createRoot } from 'react-dom/client';
import App from '@/App.jsx';
import '@/styles/Global.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@/assets/fontawesome-free-6.6.0-web/css/all.min.css';

let html_root = document.getElementById('root');
let root = createRoot(html_root);
root.render(<App />);