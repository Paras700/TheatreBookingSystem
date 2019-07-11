import React from 'react';
import { Field, reduxForm } from 'redux-form';

class Movie extends React.Component{
  constructor(props) {
    super(props);
      this.saveMovie = this.saveMovie.bind(this);
       this.state = {
        data: []
      }
  }

  componentWillMount() {
    const array = JSON.parse(localStorage.getItem('Theatre'));
    this.state.data = array;
 }

 saveMovie(values) {
   console.log('submit called',values);
   this.props.addMovielist(values);
 }

  render() {
    const nameData = this.state.data.map(item => {
      return(
        <option key={item.Name}>{item.Name}</option>
      )
    })
    return(
      <div className="container">
        <form onSubmit={this.props.handleSubmit(this.saveMovie)}>
           <label>Theatre</label>
           <Field name="Theatre" component="select">
              {nameData}
           </Field><br/>
           <label>Movies</label>
           <Field
             name="Movie"
             component="input"
             placeholder="Enter Movie Name"
             type="text"
           />
           <button
             type="submit"
             className="btn btn-primary m-3">Save
           </button>
      </form>
      </div>
    );
  }
}

export default reduxForm({
  form:'form',
})(Movie);
