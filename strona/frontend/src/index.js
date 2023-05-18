import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppComponent from './components/app.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from 'react-router-dom';

import {createStore} from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppComponent />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
