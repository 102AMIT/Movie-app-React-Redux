import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import store from './store/store'
import { Provider } from'react-redux'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* {using provider for passing the store any where in component and using the data easily} */}
  <Provider store={store} >
    <App />
  </Provider>
  </React.StrictMode>
);

