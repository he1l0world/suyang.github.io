import App from './App';
import globalStore from './redux/globalStore';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
        <Provider store={globalStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
