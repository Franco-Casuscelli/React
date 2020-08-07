import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Error() {

  return (
    <React.Fragment>
        <div className="container">
            <div className='row'>
                <div className='col-1'>

                </div>
                <div className='col-10' id='error'>
                    <h2 className="alert alert-warning" role="alert"> 404 not found </h2>
                    <img src="/img/404.png" alt=""></img>
                    <p class="texto2">We're sorry, but for one reason or another (a misspelled URL, a bad referral link from another site, or a deleted file) the page you requested cannot be found.</p>
            
                <Link to="/"  type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false"> Back to site </Link>
             
                
               </div>
                <div className='col-1'>
                    
                </div>
            </div>
        </div>
        
    </React.Fragment>
    
  );
}

export default Error;