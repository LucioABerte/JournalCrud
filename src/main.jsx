import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';

import { JournalApp } from './JournalApp';
import './styles.css';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <JournalApp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
