import React from 'react';

import { connect } from 'react-redux';
import Booking from '../components/Booking';
import { getSlot, getUser, selectSlotData, updateCapacity } from '../modules/booking';

const mapDispatchToProps = (dispatch) => {
  return {
    getSlot: (slot)  => dispatch(getSlot(slot)),
    getUser: ()  => dispatch(getUser()),
    selectSlotData: (selectSlot,selectTheatre,slotValue) => dispatch(selectSlotData(selectSlot,selectTheatre,slotValue)),
    updateCapacity: (capacityValue,theatreValue,slotValueNew) => dispatch(updateCapacity(capacityValue,theatreValue,slotValueNew))
  }
}

const mapStateToProps = (state) => {
  return  {
    slot: state.booking.slot,
    users: state.booking.users,
    name: state.booking.name,
    capacity: state.booking.capacity,
    arrayObj: state.booking.arrayObj,
    updateCapacity: state.booking.updateCapacity
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Booking);
