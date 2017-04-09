import React, { Component } from 'react';
import { render } from 'react-dom';
import App from '../components/first_page/App';
import SignIn from '../components/first_page/SignIn';
import SignUp from '../components/first_page/SignUp';
import {Router, Route } from 'react-router';
import {Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

class Main extends Component {
    render(){
        return (
          <Router history={hashHistory}>
            <Route path='/' component={App} />
            <Route path='/sign_in' component={SignIn} />
            <Route path='/sign_up' component={SignUp} />
          </Router>
        );
    }
}
render (<Main />, window.document.getElementById('app'))
