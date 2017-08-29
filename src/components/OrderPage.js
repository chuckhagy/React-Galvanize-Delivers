import React from 'react';
import OrderPageLayout from './OrderPageLayout';
import MenuComponent from './MenuComponent';
import OrderFormComponent from './OrderFormComponent';
import OrderTableComponent from './OrderTableComponent';
import OrderSuccessMessageComponent from './OrderSuccessMessageComponent';


export default function OrderPage( {menuItems, orderItems, onAddItem, onSubmitOrderForm, customerInfo, onCloseOrderSuccessMessage}){


  return(
    <div>
    <OrderPageLayout >
      <MenuComponent items={menuItems}  onAddItem={onAddItem} />
      <OrderTableComponent items={orderItems} />
      {customerInfo ?
        <OrderSuccessMessageComponent customerInfo={customerInfo} onClose={onCloseOrderSuccessMessage} />
        : <OrderFormComponent onSubmitOrderForm={onSubmitOrderForm} items={orderItems}/>};
    </OrderPageLayout>
  </div>
  );
}
