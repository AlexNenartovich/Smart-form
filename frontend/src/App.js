import React, { Component } from "react";
import AddEmployee from "./AddEmployee";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Table from "./Table";

class App extends Component {
    render() {
        return (
            <Router>
              <Switch>
                <Route exact path="/" component={AddEmployee} />
                <Route exact path="/view" component={Table} />
              </Switch>
            </Router>
        );
    }
}

export default App;
