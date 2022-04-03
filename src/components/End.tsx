import styled from '@emotion/styled';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const HomeDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
        & > h1 {
            margin: 5px;
            font-family: arial;
            font-weight: 400;
            font-size: 3rem;
            max-width: 66vw;
        };
        & > h2 {
            margin: 25px;
            font-family: calluna;
            font-weight: 300;
            font-size: 2rem;
            color: red;
            max-width: 66vw;
        };
        & > p {
            margin: 25px;
            font-family: calluna;
            font-weight: 300;
            font-size: 1.5rem;
            max-width: 66vw;
        };
        & > ul {
            margin: 25px;
            font-family: calluna;
            font-weight: 300;
            font-size: 1.5rem;
            max-width: 66vw;
        };
`
const BeginButton = styled.a`
`

const End: React.FC = (): JSX.Element => {

    return (
        <HomeDiv>
            <h1>UECHIRYU</h1> 
            <h1>BUTOKUKAI</h1>
            <h2> Game Over!</h2>
            {/* <p>The following is a timed multiple choice trivia quiz game created to help black belt candidates prepare for the written portion of the black belt test. I wanted something more fun and engaging than simple flash cards, because I've always hated those, so I decided to build a trivia game to help me study. The rules of the game are as follows:</p> */}
            {/* <ul>
                <li>The player will start with 60 seconds on the clock.</li>
                <li>Correct answers will add 3 seconds of time to the clock.</li>
                <li>Incorrect answers will remove 5 seconds of time from the clock.</li>
                <li>Questions will be presented in multiple choice format.</li>
                <li>Questions will be presented in a random order every playthrough.</li>
                <li>Answers will be presented in a random order for every question.</li>
            </ul>
            <p>Enjoy!</p> */}
            <Button sx={{height: 50, fontSize: 20, width: 260}} component={Link} to={'/questions/0'} variant="contained" >
                Again?
            </Button>
        </HomeDiv>
    )
};

export default End;
