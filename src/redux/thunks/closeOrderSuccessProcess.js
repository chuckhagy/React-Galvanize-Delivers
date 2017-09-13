export default function closeOrderSuccessProcess(){
  return(dispatch, getState) => {
    dispatch({
      type: 'CLOSE_ORDER',
      customerInfo: null,
      orderItems: []
    });
  }
}
