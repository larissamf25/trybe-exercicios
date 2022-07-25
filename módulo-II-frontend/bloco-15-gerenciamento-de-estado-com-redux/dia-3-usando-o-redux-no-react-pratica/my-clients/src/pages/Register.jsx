import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import saveAction from "../redux/actions";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      idade: '',
      email: '',
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { register } = this.props;
    const { nome, idade, email } = this.state;
    return (
      <div>
        <form>
          <input placeholder="nome" type="text" name="nome" onChange={ this.handleChange } />
          <input placeholder="idade" type="number" name="idade" onChange={ this.handleChange }/>
          <input placeholder="email" type="email" name="email" onChange={ this.handleChange }/>
          <button type="button" onClick={ () => register({ nome, idade, email }) }>Save</button>
          <Link to="/clients">Clientes</Link>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  register: (value) => dispatch(saveAction(value)),
});

export default connect(null, mapDispatchToProps)(Register);