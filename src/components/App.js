import { Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';

import Home from './Home';
import About from './About';
import Header from './Header';
import Error from './404';

function App() {

  return (
    <div className="container-fluid">
      <Header/>

        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route component={Error}/>
        </Switch>   
    </div>
    
  );
}

export default App;
