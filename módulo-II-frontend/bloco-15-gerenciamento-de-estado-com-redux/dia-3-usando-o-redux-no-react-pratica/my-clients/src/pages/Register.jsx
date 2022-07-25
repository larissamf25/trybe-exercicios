import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
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

  handleSave = () => {
    const { register } = this.props;
    const { nome, idade, email } = this.state;
    register({ nome, idade, email });
    <Redirect to="/clients" />
  }

  render() {
    return (
      <div>
        <form>
          <input placeholder="nome" type="text" name="nome" onChange={ this.handleChange } />
          <input placeholder="idade" type="number" name="idade" onChange={ this.handleChange }/>
          <input placeholder="email" type="email" name="email" onChange={ this.handleChange }/>
          <button type="button" onClick={ this.handleSave }>Save</button>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
}

const mapDispatchToProps = () => ({
  register: (value) => dispatch(saveAction(value)),
});

export default connect(null, mapDispatchToProps)(Register);