import React, { Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router';
class App extends Component{
  render(){
      return (
        <div>
         <Link to='/sign_in'>in!</Link>
         <Link to='/sign_up'>up!</Link>
        </div>
      );
  }
}
export default App
