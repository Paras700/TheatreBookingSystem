import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderField from '../RenderField';

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)

class Theatredeatailform extends React.Component{
  constructor(props) {
    super(props);
      this.state= {
       message:''
     }
     this.saveData = this.saveData.bind(this);
  }

  saveData(values) {
    this.props.addItemData(values);
     this.setState({
       message:"successfully Registered theatre"
     })
   }

  render() {
    return (
      <div className="w-50 p-3 container">
      <h2>THEATRE REGISTERED</h2>
      <span className="text-danger">{this.state.message}</span>
        <form onSubmit={this.props.handleSubmit(this.saveData)}>
          <div className="form-group row">
          <label htmlFor="name"  className="col-sm-3 col-form-label">Name</label>
          <Field
              name="Name"
              component={RenderField}
              validate = {[ maxLength15, minLength2]}
              placeholder="Enter Theatre Name"
              type="text"
              className="form-control"
              value={this.state.message}
          />
          </div>
          <div className="form-group row">
          <label htmlFor="address" className="col-sm-3 col-form-label">Address</label>
          <Field
              name="address"
              component={RenderField}
              placeholder="Enter Address"
              type="text"
              className="form-control"
          />
          </div>
          <div className="form-group row">
          <label  className="col-form-label col-sm-3 pt-0">Slot</label>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label"><Field name="slot" component="input" type="radio" value="morning"/>Morning</label>
            <label className="col-sm-2 col-form-label"><Field name="slot" component="input" type="radio" value="evening"/>Evening</label>
            <label className="col-sm-2 col-form-label"><Field name="slot" component="input" type="radio" value="afternoon"/>Afternoon</label>
            <label className="col-sm-2 col-form-label"><Field name="slot" component="input" type="radio" value="night"/>Night</label>
          </div>
          </div>
          <div className="form-group row">
            <label htmlFor="capacity"  className="col-sm-3 col-form-label">Capacity</label>
            <Field
              name="Capacity"
              component={RenderField}
              validate = {[ minLength2]}
              placeholder="Enter Capacity"
              type="number"
             className="form-control"
           />
         </div>
         <div className="form-group row">
        <div className="col-sm-3 col-form-label">
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
