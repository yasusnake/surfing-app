import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';

// Store
import ShopStore from './stores/ShopStore';

ReactDOM.render(
  <Provider ShopStore={ShopStore}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
