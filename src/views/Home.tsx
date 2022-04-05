import styled from '@emotion/styled';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

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
            margin: 5px;
            font-family: calluna;
            font-weight: 300;
            font-size: 1.5rem;
            max-width: 66vw;
        };
`

const highScore: string = JSON.parse(localStorage.getItem("uechiHighScore") || "0");

const Home: React.FC = (): JSX.Element => {

    return (
        <HomeDiv>
            <h1>UECHIRYU</h1> 
            <h1>BUTOKUKAI</h1>
            <h2> History & Terminology Quiz</h2>
            <p>Your best score:</p>
            <Chip sx={{width: 260, height: 50, fontSize: 30, marginBottom: 5}} variant='outlined' color='primary' label={highScore} size='medium'/>
            <Button sx={{height: 50, fontSize: 20, width: 260}} component={Link} to={'/questions/0'} variant="contained" >
                Begin
            </Button>
        </HomeDiv>
    )
};

export default Home;
