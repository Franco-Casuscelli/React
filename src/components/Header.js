import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Header() {

  return (
    <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <Link to='/' className="navbar-brand" href="#">Home </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to='/about' className="nav-item nav-link"> About US </Link>
                    <Link to='/nada' className="nav-item nav-link"> Hi </Link>
                    
                </div>
            </div>
        </nav>
    </React.Fragment>
    
  );
}

export default Header;