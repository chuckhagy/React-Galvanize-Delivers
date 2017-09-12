export default function rootReducer(currentState = {
  menuItems: null,
  orderItems: [],
  customerInfo: null
}, action){
  switch(action.type){
    case 'GET_ITEMS':
      return {menuItems: action.newMenuItems};
    case 'ADD_ITEM':
      return {orderItems: [...currentState.orderItems, currentState.menuItems.find(item => {
        console.log(item)
        return item.id === action.itemId;
      }
    )]};
    case 'SUBMIT_ORDER':
      console.log("SUBMIT_ORDER Happens");
      return currentState;
    case 'CLOSER_ORDER':
      console.log("CLOSER_ORDER Happens");
      return currentState;

    default:
      return currentState;
  }


}
