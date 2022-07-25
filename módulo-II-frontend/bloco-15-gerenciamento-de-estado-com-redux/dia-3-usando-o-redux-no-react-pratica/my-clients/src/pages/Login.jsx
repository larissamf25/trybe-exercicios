import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        <p>This is the login page</p>
        <form>
          <input placeholder="email" type="text"/>
          <input placeholder="senha" type="text"/>
          <button type="button" onClick={ () => <Redirect to="/clients" /> }>Login</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  
}

export default Login;