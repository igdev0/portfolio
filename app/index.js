import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import reduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import {Store} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

import App from './components/app';
import routes from './routes';

const initState = window.__INIT_STATE__;
delete window.__INIT_STATE__;

const history = createBrowserHistory();
const store = createStore(rootReducer, initState, applyMiddleware(reduxPromise, thunk));

ReactDOM.hydrate(
<Provider store={store}>
 <Router history={history}>
  <App>
   {
  	routes.map(({path, exact, component}, key) => {
  		return (
  		 <Route key={key} path={path} exact={exact} component={component}/>
  		)
  	})
   }
  </App>
 </Router>	
</Provider>, document.getElementById('root'));

