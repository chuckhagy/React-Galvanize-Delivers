import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderTableComponent from './OrderTableComponent';
import './OrderTableComponent.story.css';

storiesOf('OrderTableComponent', module)
.add('Happy Path for Tables', () =>
  <OrderTableComponent
  items={[
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
  ]}
  />
);