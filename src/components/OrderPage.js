import React from 'react';
import OrderPageLayout from './OrderPageLayout';
import MenuComponent from './MenuComponent';
import OrderFormComponent from './OrderFormComponent';
import OrderTableComponent from './OrderTableComponent';

export default function OrderPage( {menuItems, orderItems, defaultCustomerInfo, onAddItem}){
  return(
    <div>
    <OrderPageLayout >
      <MenuComponent items={menuItems}  onAddItem={onAddItem} />
      <OrderTableComponent items={orderItems} />
      <OrderFormComponent defaultCustomerInfo={defaultCustomerInfo} />
    </OrderPageLayout>
  </div>
  );
}

