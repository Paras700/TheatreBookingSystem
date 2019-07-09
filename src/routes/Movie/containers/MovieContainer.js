import React from 'react';

import { connect } from 'react-redux';
import Movie from '../components/movie';


const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (formData)  => dispatch(addItem(formData))
  }
}

// const mapStateToProps = (state) => {
//   return  {
//     items: state.student.items
//   }
// }

export default connect(mapDispatchToProps)(Movie);
