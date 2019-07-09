import React from 'react';
import {connect} from 'react-redux';

import {getData} from '../modules/list';
import ListComponent from '../components/List';
const mapStateToProps = (state) => {
  return  {
    users : state.list.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return  {
    getData : () => dispatch(getData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent)
