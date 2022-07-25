import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

Home.propTypes = {

}

export default Home;