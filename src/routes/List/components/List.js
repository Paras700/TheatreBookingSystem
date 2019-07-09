import React from 'react';
//import PropTypes from 'prop-types'

class Userlist extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       users : []
     }
   }

  componentWillMount(){
    this.props.getData()
  }

  componentDidMount(){
    this.setState({
      users : this.props.users
    })
  }
   render(){
     const element = this.state.users.map(item => {
       return (
        <div key={item.id} className="container">
          <table className="table table-dark">
           <tbody>
             <tr>
               <td>{item.firstName}</td>
               <td>{item.lastName}</td>
               <td>{item.email}</td>
             </tr>
             </tbody>
          </table>
        </div>
      );
    });
    return(
       <div>
         <span>{element}</span>
       </div>
     );
   }
 }

export default Userlist;
