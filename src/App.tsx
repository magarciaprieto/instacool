import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

//Components
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import NewsFeed from './containers/NewsFeed';

function App() {
  return (
    <div> 
      <Route exact={true} path='/' component={Login} />
      <Route exact={true} path='/register' component={Register} />
      <Route exact={true} path='/app/newsfeed' component={NewsFeed} />
    </div>
  );
}

export default App;
