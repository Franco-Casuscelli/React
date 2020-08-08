import React from 'react';
import './App.css';


function Profile() {

  return (
    <React.Fragment >
        <div className="container-fluid" id='base'>
            <div className='row'>
                <div className='col-2'>

                </div>
                <div className='col-8' id='index'>
                
                  <h2 className="alert alert-info" role="alert"> Profile </h2>
                  <p><b>First name:</b></p>
                  <p><b>Last name:</b></p>
                  <p><b>Email:</b></p>
                      
                
                </div>
                <div className='col-2'>
                    
                </div>
            </div>
        </div>
    </React.Fragment>
    
  );
}

export default Profile;
