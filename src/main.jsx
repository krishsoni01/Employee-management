import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import AuthProvider from './context/AuthProvider';
import {ToastContainer} from "react-toastify";

createRoot(document.getElementById('root')).render(
<AuthProvider>
    <App />
    <ToastContainer position='top-center' limit={3}/>
</AuthProvider>
);
