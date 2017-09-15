import React, { Component } from 'react';
import './App.css';
import OrderPage from './components/OrderPage'
import OrderPageContainer from './redux/OrderPageContainer'
import getMenuProcess from './redux/thunks/getMenuProcess'
import addItemProcess from './redux/thunks/addItemProcess'
import submitOrderFormProcess from './redux/thunks/submitOrderFormProcess'
import closeOrderSuccessProcess from './redux/thunks/closeOrderSuccessProcess'
import { Provider } from 'react-redux'

import setupStore from './redux/setupStore'
const store = setupStore();

export default class App extends Component {
  
  render(){
    return(
      <div className="app">
        <Provider store={store}>
          <OrderPageContainer />
        </Provider>
      </div>
      
    )
  }
}
