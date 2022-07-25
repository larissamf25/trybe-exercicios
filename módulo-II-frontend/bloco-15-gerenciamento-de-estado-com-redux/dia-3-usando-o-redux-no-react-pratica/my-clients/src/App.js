import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Clients from "./pages/Clients";
import Register from "./pages/Register";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>This is the app</p>
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/clients"><Clients /></Route>
          <Route path="/register"><Register /></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
