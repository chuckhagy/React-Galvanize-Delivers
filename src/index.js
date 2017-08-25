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

let defaultCustomerInfo = {
name: 'Nestor Toro',
phone: '(650) 533-8676',
address: '123 Main Street, Oakland, CA'
}

render();

function handleAddItem(itemId){
  orderItems.push(menuItems.find(item => item.id === itemId));
  render()
};

function render(){
ReactDOM.render(<OrderPage menuItems={menuItems} orderItems={orderItems} defaultCustomerInfo={defaultCustomerInfo} handleAddItem={handleAddItem} />, document.getElementById('root'));
}
