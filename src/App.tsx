import React, { useState, useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import services from './services';

//Components
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import NewsFeed from './containers/NewsFeed';
import Navbar from './components/Navbar';
import Profile from './containers/Profile';



function App() {

  const [loading, setLoading] = useState(true);

  const { auth } = services;

  useEffect( () =>
    auth.onAuthStateChanged( user => {
      console.log(user)
      setLoading(false)
    })
  );
 
  return (
    loading ? <span> Loading </span> : <div> 
      <Route exact={true} path='/' component={Login} />
      <Route exact={true} path='/register' component={Register} />
      <Route path='/app/' component={Navbar} />
      <Route exact={true} path='/app/newsfeed' component={NewsFeed} />      
      <Route exact={true} path='/app/profile' component={Profile} />
    </div>
  );
}

export default App;
