import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddJob from "./components/job/AddJob";
import { Provider } from "react-redux"; //setup the redux
import store from "./store";
import UpdateJob from "./components/job/UpdateJob";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addJob" component={AddJob} />
            {
              //pass parameter using /:param
            }
            <Route exact path="/updateJob/:id" component={UpdateJob} />

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
