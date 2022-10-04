import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routing from '../pages/Routing';
import ApiInterceptor from './api/api.interceptor';
import store from './store';
import './styles/export'

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </Provider>
  )
}

ApiInterceptor(store)

export default App;
