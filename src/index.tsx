import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Redux + Router + Firebase services
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import services from './services';
import createHistory from 'history/createBrowserHistory'

//Reducer + Thunk
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import * as reducers from './ducks';

const store = createStore(combineReducers({
  ...reducers,
  form: formReducer,
}), applyMiddleware(thunk.withExtraArgument(services)));

const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <App history={history} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();