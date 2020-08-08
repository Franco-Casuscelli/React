/*
import React, { Component } from 'react';
import './App.css';

function Profile(props) {
    let userID = Number(props.match.params.id);
    console.log(userID)
class Profile extends Component {
    
 
    componentDidMount(){
        fetch('/api/user')
        .then(response => response.json())

        .then(info => {
          console.log(info);
          let newUser = info.data;

          let UserFIND = newUser.find(user => newUser.id === userID)

            render(

           

            <React.Fragment >
                <div className="container-fluid" id='base'>
                    <div className='row'>
                        <div className='col-2'>
        
                        </div>
                        <div className='col-8'>
                            <h4 className="alert alert-info">Perfil de: {UserFIND.first_Name}</h4>
                            <p><b>First name:</b></p>
                            <p><b>Last name:</b></p>
                            <p><b>Email:</b></p>
        
                        </div>
                        <div className='col-2'>
        
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
            )
          })


          
          
       
        .catch(error => console.log(error))
        
    }
    
    

}

}
export default Profile;
*/