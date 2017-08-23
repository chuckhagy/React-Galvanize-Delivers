import React from 'react';

export default function OrderPageLayout(props){
  return(
    <div className="OrderPageLayout">
      <div>{props.children[0]}</div>
      <div>
        {props.children[1]}
        {props.children[2]}
      </div>
  </div>
  )
}