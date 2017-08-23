import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItemComponent from './MenuItemComponent';
import MenuComponent from './MenuComponent';
import OrderFormComponent from './OrderFormComponent';
import OrderTableComponent from './OrderTableComponent';
import OrderPageLayout from './OrderPageLayout';
import './OrderPageLayout.story.css';

storiesOf('OrderPageLayout', module)
.add('Happy Path for Layouts', () =>
  <OrderPageLayout>
    <MenuComponent items={[
      {
        name: 'Some Item A',
        price: 9.99,
        imagePath: '//via.placeholder.com/300x200'
      },
      {
        name: 'Some Item B',
        price: 8.99,
        imagePath: '//via.placeholder.com/300x200'
      },
      {
        name: 'Some Item C',
        price: 7.99,
        imagePath: '//via.placeholder.com/300x200'
      },
      {
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
  </OrderPageLayout>
);