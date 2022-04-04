import styled from '@emotion/styled';
import { Outlet } from "react-router-dom";
import CountdownTimer from '../components/CountdownTimer';
import React, { useState } from 'react';
import questionsJSON from '../static/questions.json';
import QuestionContext from '../context/questionContext';
import ResponseContext from '../context/responseContext';
import Container from '@mui/material/Container';
import { IContextState, IQuestion } from '../interface/interface';
import End from './End';

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
function shuffleArray(array: Array<IQuestion>) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * array.length);
        [array[i], array[j]] = [array[j], array[i]];
    };
};

// export function usePassedContext() {
//     return useOutletContext<Array<IContextState>>();
// };


const BeginGame: React.FC = (): JSX.Element => {

    const now: number = new Date().getTime(); 
    const [currentTimer, setTimer] = useState<number>(now + (60 * 1000));

    const [response, setResponse] = useState<number>(-1);
    const initialValue: IContextState = {"stateVar": response, "stateFunction": setResponse};

    if (currentTimer <= now) {
        return (
            <GameOver />
        )
    } else {
        return (
            <QuestionContext.Provider value={questionsJSON}>
                <ResponseContext.Provider value={initialValue}>
                    <Questions stateVar = {currentTimer} stateFunction = {setTimer}/>
                </ResponseContext.Provider>
            </QuestionContext.Provider>
        );
    };
};

const Questions: React.FC<IContextState> = (props): JSX.Element => {

    shuffleArray(questionsJSON)

    return (
        <Container sx={{display: "flex", flexDirection: "column", alignItems: "center", height: "100vh"}} maxWidth = 'xs'>
            <br />
            <TimerDiv>
                <CountdownTimer stateVar = {props.stateVar} stateFunction = {props.stateFunction}/>
            </TimerDiv>
            <br />
            <QuestionsDiv>
                <Outlet />
            </QuestionsDiv>
        </Container>
    );
};

const GameOver: React.FC = (): JSX.Element => {
    return(
        <End />
        );
};

export default BeginGame;