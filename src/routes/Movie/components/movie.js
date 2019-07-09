import React from 'react';
import { Field, reduxForm } from 'redux-form';

class Movie extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <form>
           <label>Theatre</label>
         <Field name="favoriteColor" component="select">
            <option>-select-</option>
         </Field><br/>
          <label>Movies</label>
          <Field name="favoriteColor" component="select">
            <option>-select-</option>
         </Field>
      </form>
      </div>
    )
  }
}

export default reduxForm({
  form:'form',
})(Movie);
