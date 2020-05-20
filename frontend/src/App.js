import React, { Component } from "react";
import AddEmployee from "./AddEmployee";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Table from "./Table";
import LandingPage from "./LandingPage";
import Search from "./Search";
import SearchResults from "./SearchResults";
import UpdateEmployee from "./UpdateEmployee";
import Analytics from "./Analytics";
import Julia from "./Julia";
import JuliaLanding from "./JuliaLanding";

class App extends Component {
    render() {
        return (
            <Router>
              <Switch>
                  <Route exact path="/" component={JuliaLanding} />
                  <Route exact path="/add" component={Julia} />
                  <Route exact path="/view" component={Table} />
                  <Route exact path="/search" component={Search} />
                  <Route exact path="/searchres" component={SearchResults} />
                  <Route exact path="/update" component={UpdateEmployee} />
                  <Route exact path="/analytics" component={Analytics} />
                  <Route exact path="/julia" component={Julia} />
              </Switch>
            </Router>
        );
    }
}

export default App;
