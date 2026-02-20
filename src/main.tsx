import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './styles/theme.less';
import './index.css';
import App from './App';
// import './components/Message/index.tsx';
import router from './router/index.tsx';

createRoot(document.getElementById('root')!).render(<App />);
// history hash
