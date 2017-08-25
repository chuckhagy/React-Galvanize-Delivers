import React from 'react';

export default function OrderTableComponent({ items }){
  let subTotal = 0;
  let itemsArr = [];
  for(let item of items){
    itemsArr.push(item.price);
  }
  if(items.length > 0){
    subTotal += itemsArr.reduce(function (sum, value) {
      return sum + value
    })
  }

  let tax = (subTotal * 0.085).toFixed(2);
  let total = (parseFloat(subTotal) + parseFloat(tax)).toFixed(2);
  return(
  <div className="OrderTableComponent">
    <table className="striped orderTable">
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => <tr key={index}><td>{item.name}</td><td>${item.price}</td></tr>)}
      </tbody>
    </table>
    <div className="row">
      <div className="col s7 totalsTags">
        <div>SubTotal:</div>
        <div>Tax:</div>
        <div>Total:</div>
      </div>
      <div className="col s5 totalsNums">
        <div>${subTotal.toFixed(2)}</div>
        <div>${tax}</div>
        <div>${total}</div>
      </div>
    </div>
  </div>
  )
}