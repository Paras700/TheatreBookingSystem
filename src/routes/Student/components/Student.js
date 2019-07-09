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


class Student extends React.Component {
  constructor(props) {
    super(props);
      this.save = this.save.bind(this);
  }

  save(values) {
    this.props.addItem(values);
  }

  render() {
      return (
       <form onSubmit={this.props.handleSubmit(this.save)}>
           <div>
             <label htmlFor="firstName"class="form-check-label">First Name</label>
                <Field
                   name = "firstName"
                   component = {RenderField}
                   placeholder = "Enter First Name"
                   validate = {[ maxLength15, minLength2]}
                   type = "text"
               />
          </div>
             <div>
               <label htmlFor = "lastName" class = "form-check-label">Last Name</label>
                 <Field
                   name = "lastName"
                   component = {RenderField}
                   placeholder = "Enter Last Name"
                   validate = {[ maxLength15, minLength2]}
                   type = "text"
                />
            </div>
          <div>
            <label htmlFor = "email" class = "form-check-label">Email</label>
              <Field
                 name = "email"
                 component = {RenderField}
                 placeholder = "Enter email"
                 type = "email"
              />
          </div>
          <button
            type="submit"
            className="btn btn-primary">Registered
          </button>
        </form>
     )
   }
}

export default reduxForm({
  form:'form',
})(Student);
