import React from 'react';

export default class OrderFormComponent extends React.Component{
    state = {
    hasValidationErrors: false
    };

    render(){
      return(
        <div className="container OrderFormComponent">
          <form onSubmit={this._handleSubmit}>
          <div className="row">
              <div className="col l2 s3">
              <i className="material-icons materialize-red-text">account_circle</i>
            </div>
            <div className="col l10 s9">
            <label className="grey-text.text-lighten-5" htmlFor="name">Name</label>
            <input type="text" id="name"></input>
            </div>
          </div>
          <div className="row">
              <div className="col l2 s3">
              <i className="material-icons materialize-red-text">phone</i>
            </div>
            <div className="col l10 s9">
            <label className="grey-text.text-lighten-5" htmlFor="phone">Phone</label>
            <input type="text" id="phone"></input>
            </div>
          </div>
          <div className="row">
              <div className="col l2 s3">
              <i className="material-icons materialize-red-text">business</i>
            </div>
            <div className="col l10 s9">
            <label className="grey-text.text-lighten-5" htmlFor="address">Address</label>
            <input type="text" id="address"></input>
            </div>
          </div>
          <button className="btn-large waves-effect waves-light red" type="submit" id="myButton">PLACE ORDER</button>
          {this.state.hasValidationErrors ?
          <p style={{color: 'red', fontWeight: "bold"}}>Please check your above information.</p>:
          null}
        </form>
        </div>
      )
    }

  _handleSubmit = event => {
    const { onSubmitOrderForm, items } = this.props;
    event.preventDefault();
    const $form = event.target;
    let name = $form.name.value.trim();
    let phone = $form.phone.value.trim();
    let address = $form.address.value.trim();
    if(items.length > 0 && name.length > 3 && /^[a-zA-Z\s]+/.test(name) && phone.length >= 10 && /^[\d(\s][\d-\s)]+$/.test(phone)  && address.length > 5 && /^[\d]/.test(address)){
      onSubmitOrderForm({name, phone, address})
    }
    else{
      this.setState({
        hasValidationErrors: true
      })
    }
  }

}
