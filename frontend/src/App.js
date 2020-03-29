import React, { Component } from "react";
import AddEmployee from "./AddEmployee";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Table from "./Table";
import LandingPage from "./LandingPage";
import Search from "./Search";
import SearchResults from "./SearchResults";

class App extends Component {
    render() {
        return (
            <Router>
              <Switch>
                <Route exact path="/" component={LandingPage} />
                  <Route exact path="/add" component={AddEmployee} />
                <Route exact path="/view" component={Table} />
                  <Route exact path="/search" component={Search} />
                  <Route exact path="/searchres" component={SearchResults} />
              </Switch>
            </Router>
        );
    }
}

export default App;
