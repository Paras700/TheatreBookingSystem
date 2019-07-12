import React from 'react';

import { connect } from 'react-redux';
import Theatredeatailform from '../components/Theatredeatailform';
import { addItemData } from '../modules/theatre';

const mapDispatchToProps = (dispatch) => {
  return {
    addItemData: (formData)  => dispatch(addItemData(formData))
  }
}

export default connect(null,mapDispatchToProps)(Theatredeatailform);
