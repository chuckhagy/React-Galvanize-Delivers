import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderFormComponent from './OrderFormComponent';
import './OrderFormComponent.story.css';

storiesOf('OrderFormComponent', module)
.add('Happy Path for Forms', () =>
  <OrderFormComponent
  defaultCustomerInfo={{
  name: 'Nestor Toro',
  phone: '(650) 533-8676',
  address: '123 Main Street, Oakland, CA'
}}
  />
);