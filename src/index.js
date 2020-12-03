import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import store from "./redux/store";
// import axios from "axios";

// axios.get(
//   `http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=b0ef57de6689f3bee614bd769ab91be2&artist=Kanye west&track=power&format=json`
// ).then (data =>console.log(data));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Route component={App} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
