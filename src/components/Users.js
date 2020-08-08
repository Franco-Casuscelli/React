import React, { Component } from 'react';
import './App.css';


class Users extends Component {

  constructor(){
    super();
    this.state = {
      user: []
    }
  }

  componentDidMount(){
      fetch('/api/user')
      .then(response => response.json())
      .then(info => {
        console.log(info);
        let newUser = info.data;
        this.setState(prevStatus => {
          return { user: newUser}
        })
      })
      .catch(error => console.log(error))
  }

    render(){
      let {user} = this.state;
      return (
        <React.Fragment>
          
          <h4>Usuarios</h4>
          <ul>
              {user.map((user,i) => <li key={i}> {user.first_Name} </li>)}
          </ul>
        </React.Fragment>
      )
    }



}

export default Users;
