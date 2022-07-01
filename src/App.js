import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {AddContact} from './components/AddContact';
import { Contacts } from "./components/contacts";
import { PrivateRoute } from "./components/PrivateRoute";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
          <AddContact />
          </Route>
        </Switch>
        <Switch>
          <PrivateRoute  exact path="/all-contacts">
            <Contacts />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
