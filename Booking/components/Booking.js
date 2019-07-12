import React from 'react';
import { Field, reduxForm } from 'redux-form';

class Booking extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      users:[],
      theatre:'',
      slot:'',
      msg:'',
      counter:0
    }
  }

  componentWillMount() {
    const array = JSON.parse(localStorage.getItem('Theatre'));
    this.state.data = array;
    this.props.getSlot('test');
 }

 componentDidMount(){
   this.setState({
     users : this.props.users,
   })
 }

 setName = (e) =>{
   this.setState({
     theatre:e.target.value
   })
   this.props.getSlot(e.target.value);
 }

 selectSlotData = (e) => {
   this.setState({
     slot: e.target.value
   })
    this.props.selectSlotData(e.target.value,this.state.theatre);
 }

 updateCapacity = (e) => {
   e.preventDefault();
   this.setState({
     counter: this.state.counter + 1
   })

   this.setState({
     msg: "Sucessfully booked movie"
   })
  this.props.updateCapacity(e.target.value,this.state.theatre,this.state.slot);
  this.props.selectSlotData(this.state.slot,this.state.theatre);
 }

   render() {
     const nameData = this.state.data.map(item => {
       return (
         <option key={item.Name}>{item.Name}</option>
       )
     });

     const slot = this.props.slot;
     const name = slot.map(item => {
       return (
         <option key={item.slot}>{item}</option>
       )
     });

      const arrayOfObject =  this.props.arrayObj;
      let items = '';
      if(arrayOfObject!=undefined) {
        items = arrayOfObject.map(item =>{
          return (
            <table className="table">
               <tbody>
                 <tr key={item.id}>
                   <td>{item.movie}</td>
                   <td>{item.slot}</td>
                   <td>{this.state.counter}</td>
                   <td>{item.capacity}</td>
                   <td>
                   <button
                    onClick={this.updateCapacity}
                    value={item.capacity}
                    className="btn btn-primary">BOOK</button></td>
                 </tr>
               </tbody>
            </table>
          )
        });
      }

      return (
        <div className="container">
          <span className="text-danger">{this.state.msg}</span>
          <form>
            <label className="m-3">Theatre</label>
              <Field
                name="Theatre"
                component="select"
                onChange={this.setName}
               >
             <option>-select-</option>
             {nameData}
             </Field><br/>
            <label className="m-3">slot</label>
             <Field
               name="Theatre"
               component="select"
               onClick={this.selectSlotData}>
               <option>-select-</option>
              {name}
             </Field>
             {items}
          </form>
        </div>
     )
   }
 }

export default reduxForm({
  form:'form',
})(Booking)
