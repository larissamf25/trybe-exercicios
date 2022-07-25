import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

class Clients extends React.Component {
  render() {
    const { clients } = this.props;
    return (
      <div>
        { clients.length === 0
        ? <p>Nenhum cliente cadastrado</p>
        : clients.map((client) => <p>{ client.name }</p>)}
        <button type="button" onClick={ () => <Redirect to="/register" /> }>Cadastrar</button>
      </div>
    );
  }
}

Clients.propTypes = {
  clients: PropTypes.arrayOf(PropTypes.objects).isRequired,
}

const mapStateToProps = (state) => ({ clients: state.clients });

export default connect(mapStateToProps)(Clients);