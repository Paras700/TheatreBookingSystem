import React from 'react';

import { connect } from 'react-redux';
import Movie from '../components/movie';
import { addMovielist } from '../modules/movie';


const mapDispatchToProps = (dispatch) => {
  return {
    addMovielist: (movies)  => dispatch(addMovielist(movies))
  }
}

export default connect(null,mapDispatchToProps)(Movie);
