import React, { Component } from "react";
import {Hero} from "react-landing-page";
import Container from "@material-ui/core/Container/Container";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";
import "./App.css"
import Typography from "@material-ui/core/Typography/Typography";

let deleted = false;
let returned = false;

class UpdateEmployee extends Component {
    constructor() {
        super();
        this.state = {
            message: "No modifications made",
            id: "",
            firstName: "",
            lastName: "",
            department: "",
            gender: "",
            salary: "",
            years: "",
            dob: ""
        }
        this.deleteEmp = this.deleteEmp.bind(this);
    }

    componentDidMount() {
        if(typeof this.props.location.state === 'undefined') {
            returned = true;
            this.setState({
                id: "",
                name: "",
                lastName: "",
                department: "",
                gender: "",
                salary: "",
                years: ""
            })
        }
        else {
            returned = false;
            deleted = false;
            this.setState({
                id: this.props.location.state.id || "",
                name: this.props.location.state.name,
                lastName: this.props.location.state.lastName,
                department: this.props.location.state.department,
                gender: this.props.location.state.gender,
                salary: this.props.location.state.salary,
                years: this.props.location.state.years
            })
        }
    }

    handleFirstNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleDepartmentChange = (event) => {
        this.setState({
            department: event.target.value
        })
    }

    handleGenderChange = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSalaryChange = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleYearsChange = (event) => {
        this.setState({
            years: event.target.value
        })
    }

    deleteEmp() {
        if(returned) {
            window.alert("Your previous request has been fulfilled. Please choose between New search or View employees options");
        }
        else if(deleted) {
            window.alert("This employee has already been deleted from database. Please choose between New search or View employees options");
        }
        else {
            if (window.confirm("Are you sure you want to delete this employee?")) {
                let resp = fetch("/api/employee/" + this.state.id, {
                    method: 'delete',
                    headers: {
                        "Content-Type": "application/json"
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                })
                    .then(response => response.json())
                    .catch((error) => console.log(error));
                if (resp.id !== 'undefined') {
                    deleted = true;
                    this.setState({
                        message: "Employee has been deleted from database",
                        id: "",
                        name: "",
                        lastName: "",
                        department: "",
                        gender: "",
                        salary: "",
                        years: "",
                        dob: ""
                    })
                }
                else {
                    this.setState({
                        message: "Delete process failed, please try again"
                    })
                }
                return resp;
            }
        }
    }

    updateEmployee = () => {
        if(returned) {
            window.alert("Your previous request has been fulfilled. Please choose between New search or View employees options");
        }
        else if(deleted) {
            window.alert("This employee has already been deleted from database. Please choose between New search or View employees options")
        }
        else {
            let response = fetch("/api/employee", {
                method: "PUT", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json"
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *client
                body: JSON.stringify(this.state)
            })
                .then((res) => res.json())
                .catch((error) => console.log(error));
            if (response.id !== 'undefined') {
                this.setState({
                    message: "Employee information has been updated"
                })
            }
            else {
                this.setState({
                    message: "Update failed. Please try again"
                })
            }
        }
    }

    render() {
        return (
            <Hero
                color="black"
                bg="white"
                backgroundImage="data:image/jpeg;base64,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"
            >
                <div className="header">
                    <h1>Please Edit Employee Information Below</h1>
                </div>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className="paper">
                        <form className="form" noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="name"
                                        value={this.state.name || ""}
                                        label="First Name"
                                        name="name"
                                        autoComplete="name"
                                        onChange={this.handleFirstNameChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="name"
                                        value={this.state.lastName || ""}
                                        label="Last Name"
                                        name="name"
                                        autoComplete="name"
                                        onChange={this.handleLastNameChange}
                                        />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="department"
                                        name="department"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        value={this.state.department || ""}
                                        id="department"
                                        label="Department"
                                        onChange={this.handleDepartmentChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="gender"
                                        value={this.state.gender || ""}
                                        label="Gender"
                                        name="gender"
                                        autoComplete="gender"
                                        onChange={this.handleGenderChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="salary"
                                        value={this.state.salary || ""}
                                        label="Salary"
                                        name="salary"
                                        autoComplete="salary"
                                        onChange={this.handleSalaryChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="years"
                                        value={this.state.years || ""}
                                        label="Years of Experience"
                                        name="years"
                                        autoComplete="years"
                                        onChange={this.handleYearsChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="date"
                                        label="Date of birth"
                                        type="date"
                                        className='textField'
                                        defaultValue="1998-04-02"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
                <div className="mod-buttons">
                    <div className="delete-button">
                        <Button fullWidth
                                variant="contained"
                                color="secondary"
                                onClick={this.deleteEmp}
                                component={Link}
                        >
                            Delete employee
                        </Button>
                    </div>
                    <div>
                        <Button component={Link}
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={this.updateEmployee}
                        >Update information
                        </Button>
                    </div>
                </div>
                <Typography style={{ margin: 7 }} variant="body1">
                    Status: {this.state.message}
                </Typography>
                <Link to="/search">
                    {" "}
                    <Typography align="left">
                        New search
                    </Typography>{" "}
                </Link>
                <Link to={{pathname: "/view",
                        state: {
                           route: "employee"
                        }
                }}>
                    {" "}
                    <Typography align="left">
                        View employees
                    </Typography>{" "}
                </Link>
            </Hero>
        )
    }
}

export default UpdateEmployee;
