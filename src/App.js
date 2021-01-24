import React from "react";
import { Route, Switch } from "react-router-dom";
import SocketMsg from "./socketio";
import SocketPost from "./socketPost";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={SocketPost} />
        <Route path="/socketPost" component={SocketPost} />
        <Route path="/socket" exact component={SocketMsg} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
