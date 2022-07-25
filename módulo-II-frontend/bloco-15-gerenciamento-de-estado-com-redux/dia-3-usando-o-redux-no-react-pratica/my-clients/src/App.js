import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Register from "./pages/Register";
import Login from  "./pages/Login";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/clients"><Clients /></Route>
          <Route path="/register"><Register /></Route>
          <Route path="/" exact><Home /></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
