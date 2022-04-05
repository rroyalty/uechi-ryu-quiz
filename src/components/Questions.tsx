import styled from '@emotion/styled';
import { Outlet } from "react-router-dom";
import CountdownTimer from '../components/CountdownTimer';
import React, {useState} from 'react';
import Container from '@mui/material/Container';
import { IContextState } from '../interface/interface';


const QuestionsDiv = styled.div`
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TimerDiv = styled.div`
    width: 100%;
    display: inline-flex;
    justify-content: center;
`

const Questions: React.FC = (): JSX.Element => {

    const now: number = new Date().getTime(); 
    const [currentTimer, setTimer] = useState<number>(now + (60 * 1000));

    return (
        <Container sx={{display: "flex", flexDirection: "column", alignItems: "center", height: "100vh"}} maxWidth = 'xs'>
            <br />
            <TimerDiv>
                <CountdownTimer stateVar = {currentTimer} stateFunction = {setTimer}/>
            </TimerDiv>
            <br />
            <QuestionsDiv>
                <Outlet />
            </QuestionsDiv>
        </Container>
    );
};

export default Questions;