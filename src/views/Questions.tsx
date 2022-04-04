import styled from '@emotion/styled';
import { Outlet } from "react-router-dom";
import CountdownTimer from '../components/CountdownTimer';
import React, { useState } from 'react';
import questionsJSON from '../static/questions.json';
import QuestionContext from '../context/questionContext';
import ResponseContext from '../context/responseContext';
import Container from '@mui/material/Container';
import { IContextState, IQuestion } from '../interface/interface'

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

const Questions: React.FC = (): JSX.Element => {

    // const today: number = new Date().getTime() + (60 * 1000);  
    // const [currentTimer, setTimer] = useState<number>(today);

    const [response, setResponse] = useState<number>(0);
    const initialValue: IContextState = {"stateVar": response, "stateFunction": setResponse};
    shuffleArray(questionsJSON)

    // const contextToPass: ContextTypeArr = [
    //     {
    //         "stateVar": currentTimer,
    //         "stateFunction": setTimer 
    //     },
    //     {
    //         "stateVar": answerState,
    //         "stateFunction": setAnswerState 
    //     }];
    return (
        <QuestionContext.Provider value={questionsJSON}>
            <ResponseContext.Provider value={initialValue}>
                <Container sx={{display: "flex", flexDirection: "column", alignItems: "center", height: "100vh"}} maxWidth = 'xs'>
                    <br />
                    <TimerDiv>
                        <CountdownTimer />
                        {/* <CountdownTimer targetDate={currentTimer} answerState={answerState}/> */}
                    </TimerDiv>
                    <br />
                    <QuestionsDiv>
                        <Outlet />
                        {/* <Outlet context={contextToPass}/> */}
                    </QuestionsDiv>
                </Container>
            </ResponseContext.Provider>
        </QuestionContext.Provider>
    );
};

export default Questions;