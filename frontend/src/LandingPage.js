import React from 'react'
import { Hero, CallToAction} from 'react-landing-page'
import "./App.css";
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button/Button";

const LandingPage = props => (
    <div>
        <Hero
            color="black"
            bg="white"
            backgroundImage="https://source.unsplash.com/jxaj-UrzQbc/1600x900"
        >
            <h1>Welcome to SmartForm!</h1>
            <h2>Please choose from the options below</h2>
            <div className="button">
                <div style={{padding: "35px"}}>
                    <Button style={{backgroundColor: 'blue', maxWidth: '300px', maxHeight: '100px', minWidth: '200px', minHeight: '50px'}}
                            color="primary"
                            component={Link}
                            fullWidth
                            variant="contained"
                            to="/add">Add Employee</Button>
                </div>
                <div style={{padding: "35px"}}>
                    <Button style={{backgroundColor: 'blue', maxWidth: '300px', maxHeight: '100px', minWidth: '200px', minHeight: '50px'}}
                            color="primary"
                            component={Link}
                            to={{ pathname: "/view",
                            state:
                            {route: "employee"}}
                            }
                            fullWidth
                            variant="contained"
                            >View Employees</Button>
                </div>
                <div style={{padding: "35px"}}>
                    <Button style={{backgroundColor: 'blue', maxWidth: '300px', maxHeight: '100px', minWidth: '200px', minHeight: '50px'}}
                            color="primary"
                            component={Link}
                            fullWidth
                            variant="contained"
                            to="/search">Search</Button>
                </div>
                <div style={{padding: "35px"}}>
                    <Button style={{backgroundColor: 'blue', maxWidth: '300px', maxHeight: '100px', minWidth: '200px', minHeight: '50px'}}
                            color="primary"
                            component={Link}
                            fullWidth
                            variant="contained"
                            to="/analytics">Analytics</Button>
                </div>
            </div>
        </Hero>
    </div>
)

export default LandingPage;
