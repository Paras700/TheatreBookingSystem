import React from 'react';
import { Field, reduxForm } from 'redux-form';

class Theatredeatailform extends React.Component{
  constructor(props) {
    super(props);
    this.saveData = this.saveData.bind(this);
  }

  saveData(values) {
    this.props.addItemData(values);
  }

  render() {
    return(
      <div className="container">
       <h2>Theatre</h2>
        <form onSubmit={this.props.handleSubmit(this.saveData)}>
          <div className="form-group row">
            <label htmlFor="name" class="form-check-label" className="col-sm-2 col-form-label">Name</label>
            <Field
              name="Name"
              component="input"
              placeholder="Enter Theatre Name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group row">
            <label htmlFor="address" className="form-check-label" className="col-sm-2 col-form-label">Address</label>
              <Field
               name="address"
               component="input"
               placeholder="Enter Address"
               type="text"
               className="form-control"
              />
          </div>
          <div className="form-group row">
        <label  className="col-form-label col-sm-2 pt-0">Slot</label>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label"><Field name="slot" component="input" type="radio" value="morning"/>Morning</label>
          <label className="col-sm-2 col-form-label"><Field name="slot" component="input" type="radio" value="evening"/>Evening</label>
          <label className="col-sm-2 col-form-label"><Field name="slot" component="input" type="radio" value="afternoon"/>Afternoon</label>
          <label className="col-sm-2 col-form-label"><Field name="slot" component="input" type="radio" value="night"/>Night</label>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="capacity" className="form-check-label" className="col-sm-2 col-form-label">Capacity</label>
        <Field
          name="Capacity"
          component="input"
          placeholder="Enter Capacity"
          type="number"
          className="form-control"
        />
      </div>
      <div className="form-group row">
      <div>
        <button
          type="submit"
          className="btn btn-primary">Registered
        </button>
      </div>
      </div>
      </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(Theatredeatailform);
