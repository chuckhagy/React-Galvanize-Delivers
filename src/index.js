import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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

let orderItems = [];

let customerInfo=null;

render();

function onAddItem(itemId){
  orderItems.push(menuItems.find(item => item.id === itemId));
  render();
};

function onSubmitOrderForm({name, phone, address}){
  customerInfo={name, phone, address};
  render();
}

function onCloseOrderSuccessMessage(){
  customerInfo=null;
  orderItems = [];

  render();
}

function render(){
ReactDOM.render(<OrderPage
  menuItems={menuItems}
  orderItems={orderItems}
  customerInfo={customerInfo}
  onAddItem={onAddItem}
  onSubmitOrderForm={onSubmitOrderForm}
  onCloseOrderSuccessMessage={onCloseOrderSuccessMessage}
/>, document.getElementById('root'));
}
