import React, { Component } from 'react';
import './App.css';
import OrderPage from './components/OrderPage'
import getMenuItems from './requests/getMenuItems'

export default class App extends Component {
    constructor(props) {
      super(props);

      this.state={
        menuItems: null,
        orderItems: [],
        customerInfo: null
      }

      this.props.store.subscribe(() => {
        this.setState(this.props.store.getState());
      });
    }

  render() {
    // console.log(this.props.store.getState())
    return(
      <div className="App">
        <OrderPage
          menuItems={this.state.menuItems}
          orderItems={this.state.orderItems}
          customerInfo={this.state.customerInfo}
          onAddItem={this._onAddItem}
          onSubmitOrderForm={this._onSubmitOrderForm}
          onCloseOrderSuccessMessage={this._onCloseOrderSuccessMessage}
        />
      </div>
    )
  }

  componentDidMount(){
    getMenuItems().then(menuItems => {
      this.props.store.dispatch({
        type: 'GET_ITEMS',
        newMenuItems: menuItems
      })
    })
  }


  _onAddItem = itemId => {
      this.props.store.dispatch({
        type: 'ADD_ITEM',
        id: itemId
      });
  };

  _onSubmitOrderForm = ({name, phone, address}) => {
      this.props.store.dispatch({
        type: 'SUBMIT_ORDER',
        name: name,
        phone: phone,
        address: address
      });
  }

  _onCloseOrderSuccessMessage = event => {
      this.props.store.dispatch({
        type: 'CLOSE_ORDER',
        customerInfo: null,
        orderItems: []
      });
  }

}
