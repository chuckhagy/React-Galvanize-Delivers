import React from 'react';

export default function OrderPageLayout(props){
  return(
<div>      
     <nav className="blue darken-3" role="navigation">
      <div className="nav-wrapper"><a id="logo-container" href="index.html" className="brand-logo">Galvanize Delivers</a>
        <ul className="right hide-on-med-and-down">
          <li className="active"><a href="order.html">Order Delivery</a></li>
        </ul>

        <ul id="nav-mobile" className="side-nav">
          <li className="active"><a href="order.html">Order Delivery</a></li>
        </ul>
        <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
      </div>
    </nav>
    <div className="OrderPageLayout">

      <div>{props.children[0]}</div>
      <div>
        {props.children[1]}
        {props.children[2]}
      </div>
    </div>
      
      <footer className="page-footer blue darken-2">
        <div className="container">
          <div className="row blue darken-2">
            <div className="col l6 s12">
              <h5 className="white-text">Galvanize Delivers</h5>
              <p className="grey-text text-lighten-4">Find Dining, Delivered.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <ul>
                <li><a className="grey-text text-lighten-3" href="index.html">Home</a></li>
                <li><a className="grey-text text-lighten-3" href="#">Order Delivery</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright blue darken-3">
          <div className="container">
          © 2017 Galvanize Delivers
          </div>
        </div>
      </footer>
  </div>
  )
}