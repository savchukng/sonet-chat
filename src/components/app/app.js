import React from "react";
import { Route, Switch } from "react-router-dom";
import Conversations from "../pages/conversations";
import Chat from "../pages/chat";
import "./app.css";

const App = () => {
  return (
    <Switch>
      <Route path="/conversations" component={Conversations} exact />
      <Route
        path="/conversations/:id"
        render={({ match }) => {
          const { id } = match.params;
          return <Chat id={id} />;
        }}
      />
    </Switch>
  );
};

export default App;
