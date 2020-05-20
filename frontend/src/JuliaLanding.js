import React, { useEffect } from "react";
import {Hero} from "react-landing-page";
import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";

export default function JuliaLanding() {
    const [name, setName] = React.useState("");
    const handleNameChange =  (e) => setName(e.target.value);

    return (
        <Hero>
            <h1>Welcome!</h1>
            <h2>This app uses a cutting-edge machine learning technology to help you improve relationships with your friends</h2>
            <h3>First, this app easily identifies traits of your character people may not like</h3>
            <h3>Then, it gives you helpful tips on how to work on them</h3>
            <h3>All we need from you is your first name. Please enter it below:</h3>
            <form noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="name"
                            value={name}
                            label="First Name"
                            name="name"
                            autoComplete="name"
                            onChange={handleNameChange}
                        />
                    </Grid>
                </Grid>
            </form>
            <div style={{padding: "35px"}}>
                <Button style={{
                    backgroundColor: 'blue',
                    maxWidth: '300px',
                    maxHeight: '100px',
                    minWidth: '200px',
                    minHeight: '50px'
                }}
                        color="primary"
                        component={Link}
                        fullWidth
                        variant="contained"
                        to={{
                            pathname: "/add",
                            state: {
                                name: name
                            }
                        }}
                >Let's Go</Button>
            </div>
        </Hero>
    )
}
