import React from 'react'
import { Provider, Heading, Subhead } from 'rebass'
import {
    Hero, CallToAction, ScrollDownIndicator, Section, Checklist
} from 'react-landing-page'
import "./App.css";

const featherCheckmark = <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24"
    viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
</svg>

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
