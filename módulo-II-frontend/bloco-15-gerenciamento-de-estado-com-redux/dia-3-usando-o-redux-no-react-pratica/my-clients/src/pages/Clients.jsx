import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class Clients extends React.Component {
  render() {
    const { clients } = this.props;
    return (
      <div>
        { clients.length === 0
        ? <p>Nenhum cliente cadastrado</p>
        : clients.map((client) => (
          <div>
            <p>{ client.name }</p>
            <p>{ client.idade }</p>
            <p>{ client.email }</p>
          </div>
        ))}
        <Link to="/register">Cadastrar</Link>
      </div>
    );
  }
}

Clients.propTypes = {
  clients: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
}

const mapStateToProps = (state) => ({ clients: state });

export default connect(mapStateToProps)(Clients);