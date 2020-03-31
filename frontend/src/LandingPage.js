import React from 'react'
import { Hero, CallToAction} from 'react-landing-page'
import "./App.css";

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
                    <CallToAction href="/add" mt={3}>Add Employee</CallToAction>
                </div>
                <div style={{padding: "20px"}}>
                    <CallToAction href="/view" mt={3}>View Employees</CallToAction>
                </div>
                <div style={{padding: "20px"}}>
                    <CallToAction href="/search" mt={3}>Search for Employee</CallToAction>
                </div>
            </div>
        </Hero>
    </div>
)

export default LandingPage;
