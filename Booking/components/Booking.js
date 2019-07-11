import React from 'react';
import { Field, reduxForm } from 'redux-form';

class Booking extends React.Component{
  constructor(props) {
    super(props);
       this.state = {
        data: [],
        users:[],
        theatre:''
      }
   }

  componentWillMount() {
    const array = JSON.parse(localStorage.getItem('Theatre'));
    this.state.data = array;
    this.props.getSlot('test');
 }

 componentDidMount(){
   this.setState({
     users : this.props.users
   })
 }

 setName = (e) =>{
   this.setState({
     theatre:e.target.value
   })
   this.props.getSlot(e.target.value);
 }

 selectSlotData = (e) => {
   this.props.selectSlotData(e.target.value,this.state.theatre);
 }

 updateCapacity = (e) => {
  console.log('updateCapacity called',e.target.value);
  this.props.updateCapacity(e.target.value,this.state.theatre);
 }

   render() {
     const nameData = this.state.data.map(item => {
       return (
         <option key={item.id}>{item.Name}</option>
       )
     });

     const slot = this.props.slot;
     console.log('=========',slot);
     const name = slot.map(item => {
       return (
         <option>{item}</option>
       )
     });

      const arrayOfObject =  this.props.arrayObj;
      console.log(arrayOfObject);
      let items = '';
      if(arrayOfObject!=undefined) {
        items = arrayOfObject.map(item =>{
          return (
            <table className="table">
              <tbody>
              <tr key={item.id}>
                <td>{item.movie}</td>
                <td>-</td>
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
       <div>
         <form>
           <label>Theatre</label>
            <Field
              name="Theatre"
              component="select"
              onChange={this.setName}
           >
           {nameData}
           </Field><br/>
          <label>slot</label>
          <Field
             name="Theatre"
             component="select"
             onClick={this.selectSlotData}>
            {name}
          </Field>
       </form>
       {items}
      </div>
    );
  }
}

export default reduxForm({
  form:'form',
})(Booking)
