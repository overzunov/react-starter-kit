import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import { Provider } from 'react-redux';
import store from './store';

import App from './components/app/AppComponent';
import Books from './components/books/BooksComponent';
import PageNotFound from './components/shared/PageNotFound';
import Placeholder from './components/shared/PlaceHolder';
import Login from './components/login/Login'

require('../styles/lato.scss');

function requireAuth(store) {
    return (nextState, replaceWith, callback) => {
        if (store.getState().login.sid !== null) {
            callback();
        } else {
            browserHistory.push('/login');
        }
    }
}

ReactDOM.render(
    <div>
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={Placeholder}>
                    <IndexRedirect to='/app/books' />
                    <Route path="login" component={Login}/>
                    <Route path="app" component={App} onEnter={requireAuth(store)}>
                        <Route path="about" component={PageNotFound}/>
                        <Route path="books" component={Books}>
                            <Route path="add" component={PageNotFound}/>
                            <Route path=":id" component={PageNotFound}>
                                <Route path="edit" component={PageNotFound}/>
                                <Route path="delete" component={PageNotFound}/>
                            </Route>
                        </Route>
                        <Route path="personal" component={PageNotFound}/>
                    </Route>
                </Route>
            </Router>
        </Provider>
    </div>,
    document.getElementById('app')
);