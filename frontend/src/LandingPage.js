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
                <div style={{padding: "20px"}}>
                    <Button component={Link} color="primary" fullWidth variant="contained" to="/add" >Add Employee</Button>
                </div>
                <div style={{padding: "20px"}}>
                    <Button component={Link} color="primary" fullWidth variant="contained" to="/view" >View Employees</Button>
                </div>
                <div style={{padding: "20px"}}>
                    <Button component={Link} color="primary" fullWidth variant="contained" to="/search" >Search for Employee</Button>
                </div>
            </div>
        </Hero>
    </div>
)

export default LandingPage;
