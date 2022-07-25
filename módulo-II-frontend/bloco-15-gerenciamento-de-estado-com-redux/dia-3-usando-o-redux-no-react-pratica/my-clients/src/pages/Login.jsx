import React from "react";
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        <p>This is the login page</p>
        <form>
          <input placeholder="email" type="text"/>
          <input placeholder="senha" type="text"/>
          <Link to="/clients">Clientes</Link>
        </form>
        {/* { && <p>Login não efetuado</p> } */}
      </div>
    );
  }
}

export default Login;