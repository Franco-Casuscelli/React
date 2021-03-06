import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Profile from './Profile2';

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
          <div className="container-fluid" id='base'>
            <div className='row'>

              <div className='col-1'>

              </div>
              <div className='col-10' id='nombres'>
                  <h4>Users</h4>
                  <ul>
                    {user && user.map((user,i) =>  <li key={i}>{user.first_Name} {user.last_Name}<Link to={`/users/${user.id}`}> Ver perfil</Link> </li> )}
                  </ul>
              </div>
              <div className='col-1'>

              </div>

            </div>

          
          
          <Switch>
            <Route path='/users/:id' component={Profile} />  
          </Switch> 
          </div>
        </React.Fragment>
      )
    }



}

export default Users;
