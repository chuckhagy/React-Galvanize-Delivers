import React, { Component } from 'react';
import './App.css';
import OrderPage from './components/OrderPage'

let menuItems = [
  {
    id: '001',
    name: 'Some Item A',
    price: 9.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: '002',
    name: 'Some Item B',
    price: 8.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: '003',
    name: 'Some Item C',
    price: 7.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: '004',
    name: 'Some Item D',
    price: 6.99,
    imagePath: '//via.placeholder.com/300x200'
  }
]
export default class App extends Component {
  state={
    menuItems: menuItems,
    orderItems: [],
    customerInfo: null
  }

  render() {
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
  _onAddItem = itemId => {
    this.setState(prevState => {
      return{
        orderItems: [...prevState.orderItems, prevState.menuItems.find(item => item.id === itemId)]
      }
    })
  };

  _onSubmitOrderForm = ({name, phone, address}) => {
    this.setState({customerInfo: {name, phone, address}});
  }

  _onCloseOrderSuccessMessage = event => {
    this.setState({customerInfo: null});
    this.setState({orderItems: []});
  }

}
