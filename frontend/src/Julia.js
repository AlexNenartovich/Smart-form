import React, { useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography/Typography";
import {Link, useLocation} from 'react-router-dom';
import {Hero} from "react-landing-page";
import Button from "@material-ui/core/Button/Button";

export default function Julia() {

    const [test, setTest] = React.useState("Looking for reasons");
    const ar = ["Looking for reasons...", "Results are coming up shortly...", "We are working hard...", "Please bear with us...", "Still looking...", "Looks like this may take a while...", "Oof, this is a tough one...", "Hmmm.... it looks like we are stumped."];
    const [load, setLoad] = React.useState(true);

    let location = useLocation();
    let name = location.state.name;

     useEffect(() => {
        let num = 0;
        const timer = ar.forEach((name, i) => {
            setTimeout(() => {
                setTest(name);
                num = i*5000;
                if(num === (ar.length-1)*5000)
                    setLoad(false);
            }, i*5000);
        });
        return clearTimeout(num);
    }, []);

    if(load) {

    }

    if(load) {
        return (
            <Hero>
                <h1>Searching for things NOT to like about {name}</h1>
                <div className='julia'>
                    <CircularProgress/>
                </div>
                <div className="inside">
                    <h1 style={{margin: 7}} variant="body1">
                        {test}
                    </h1>
                </div>
            </Hero>
        )
    }
    else {
        return (
            <Hero className="inside">
                <h1 style={{margin: 7}} variant="body1">
                    {test}
                </h1>
                <h2>We couldn't find anything</h2>
                <h2>It appears that {name} is utterly awesome, beautiful and smart</h2>
                <h2>We want {name} to have a great day today</h2>
                <h2>And if by any chance it is your birthday, Happy Birthday to you too!!!</h2>
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
                            to='/'
                    >Play Again</Button>
                </div>
            </Hero>
        )
    }
}
