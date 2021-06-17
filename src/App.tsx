import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

//Component
import Login from './containers/Auth/Login';



function App() {
  return (
    <div> 
      <Route exact={true} path='/' component={Login} />
    </div>
  );
}

export default App;
