import React from 'react';
import OrderPageLayout from './OrderPageLayout';
import MenuComponent from './MenuComponent';
import OrderFormComponent from './OrderFormComponent';
import OrderTableComponent from './OrderTableComponent';
import OrderSuccessMessageComponent from './OrderSuccessMessageComponent';


export default function OrderPage( {menuItems, orderItems, onAddItem, onSubmit, customerInfo, onClose}){


  return(
    <div>
    <OrderPageLayout >
      <MenuComponent items={menuItems}  onAddItem={onAddItem} />
      <OrderTableComponent items={orderItems} />
      {customerInfo ?
        <OrderSuccessMessageComponent customerInfo={customerInfo} onClose={onClose} />
        : <OrderFormComponent onSubmit={onSubmit} />};
    </OrderPageLayout>
  </div>
  );
}
