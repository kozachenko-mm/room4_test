import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search"  component={SearchPage} />

          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}