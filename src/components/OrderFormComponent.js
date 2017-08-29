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
        </form>
        </div>
      )
    }

  _handleSubmit = event => {
    const { onSubmit } = this.props;
    event.preventDefault();
    const $form = event.target;
    let name = $form.name.value;
    let phone = $form.phone.value;
    let address = $form.address.value;
    onSubmit({name, phone, address})
  }

}
