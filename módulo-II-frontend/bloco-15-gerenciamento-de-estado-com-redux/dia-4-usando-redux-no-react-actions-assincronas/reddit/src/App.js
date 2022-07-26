import React from "react";
import propTypes from 'prop-types';
import { connect } from "react-redux";
import fetchAPI from "./redux/actions";

class App extends React.Component {
  render(){
    const { isLoading, data, error, fetchAPI } = this.props;
    return (
      <div>
        <header>Reddit App</header>
        <button type="button" onClick={ () => fetchAPI('reactjs') }>reactjs</button>
        <button type="button" onClick={ () => fetchAPI('frontend') }>frontend</button>
        { isLoading && <p>Carregando</p> }
        { (!isLoading && data)
          ?  <ul>
              { Object.values(data).map((post) => <li>{ post.data.title }</li>) }
            </ul>
          : <p>{ error }</p>
        }
      </div>
    );
  }
}

App.propTypes = {
  isLoading: propTypes.bool.isRequired,
  error: propTypes.string.isRequired,
  data: propTypes.objectOf.isRequired,
  fetchAPI: propTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  isLoading: state.firstReducer.isLoading,
  error: state.firstReducer.error,
  data: state.firstReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: (value) => dispatch(fetchAPI(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
