import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OrderPageLayout from './components/OrderPageLayout';
import MenuComponent from './components/MenuComponent';
import OrderFormComponent from './components/OrderFormComponent';
import OrderTableComponent from './components/OrderTableComponent';

ReactDOM.render(<OrderPageLayout>

  <MenuComponent items={[
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
  ]} />
  <OrderTableComponent items={[
    {
      name: "Swine",
      price: 9.99,
      id: "001"
    },
    {
      name: "Ice Cream",
      price: 4.99,
      id: "002"
    },
    {
      name: "Pizza",
      price: 12.99,
      id: "003"
    }
  ]} />
  <OrderFormComponent defaultCustomerInfo={{
  name: 'Nestor Toro',
  phone: '(650) 533-8676',
  address: '123 Main Street, Oakland, CA'
  }} /> 

</OrderPageLayout>, document.getElementById('root'));
