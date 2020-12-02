import React, { Component } from "react";
import AddEmployee from "./AddEmployee";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Table from "./Table";
import LandingPage from "./LandingPage";
import SearchPage from "./Search";
import SearchResults from "./SearchResults";
import UpdateEmployee from "./UpdateEmployee";
import Analytics from "./Analytics";

class App extends Component {
    render() {
        return (
            <Router>
              <Switch>
                  <Route exact path="/" component={LandingPage} />
                  <Route exact path="/add" component={AddEmployee} />
                  <Route exact path="/view" component={Table} />
                  <Route exact path="/search" component={SearchPage} />
                  <Route exact path="/searchres" component={SearchResults} />
                  <Route exact path="/update" component={UpdateEmployee} />
                  <Route exact path="/analytics" component={Analytics} />
              </Switch>
            </Router>
        );
    }
}

export default App;
