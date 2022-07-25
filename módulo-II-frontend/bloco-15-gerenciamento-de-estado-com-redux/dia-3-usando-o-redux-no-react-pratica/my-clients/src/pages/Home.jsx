import React from "react";
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome to Home</p>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Home;