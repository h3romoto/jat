import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './App';
import { AppProvider } from './context/appContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* pass global context down the tree i.e the pages */}
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);