import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Aside from './components/asideComponent';
import reduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import {Store} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import App from './components/appComponent';
import routes from './routes';
import { loadableReady } from '@loadable/component'
const history = require('history').createBrowserHistory;
const initState = window.__INIT_STATE__;
delete window.__INIT_STATE__;
const store = createStore(rootReducer, initState, applyMiddleware(reduxPromise, thunk));
// Fix server slide matching element.

const render = module.hot ? ReactDOM.render : ReactDOM.hydrate;

const Root = () => {
  return (
    <Provider store={store}>
     <Router history={history()}>
      <App >
       {
      	routes.map(({path, exact, component, routes}, key) => {
          const C = component;
          if(!path.includes('/dashboard')) {
            return (
              <Route key={key} path={path} exact={exact} render={(props) => {
                return (
                  <main className="app_main">
                   <Aside/>
                   <section className="app_main__section">
                    <C {...props}/>
                  </section>
                 </main>
              )
              }}/>
            )
          }

      		else {
            return (
        		 <Route key={key} path={path} exact={exact} render={(props) => {
                 console.log(props)
                 return <C {...props} routes={routes}/>
               }
             }
              />
        		)
          }
      	})
       }
      </App>
     </Router>
    </Provider>
  )
}

loadableReady().then(() => {
  const root = document.getElementById('root');
  render(<Root/>, root)
})
