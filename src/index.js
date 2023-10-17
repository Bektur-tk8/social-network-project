import React from 'react';
import store from './redux/redux-store';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store} >
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );




reportWebVitals();
