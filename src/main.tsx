import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import App from './App';
import './assets/css/style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter> {/* Router konteksti burada təmin olunur */}
      <App />
    </BrowserRouter>
);
