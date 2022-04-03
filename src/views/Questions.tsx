import styled from '@emotion/styled';
import { Outlet, useOutletContext } from "react-router-dom";
import CountdownTimer from '../components/CountdownTimer';
import React, {useState, Dispatch, SetStateAction} from 'react';
import questionsJSON from '../static/questions.json';
import QuestionContext from '../context/context';
import Container from '@mui/material/Container';

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

interface IQuestion {
    question: string,
    answers: Array<string>
};

function shuffleArray(array: Array<IQuestion>) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * array.length);
        [array[i], array[j]] = [array[j], array[i]];
    };
};

interface ContextType {
    currentTimer: number,
    setTimer: Dispatch<SetStateAction<number>>
};

export function useTimerContext() {
    return useOutletContext<ContextType>();
};

const Questions: React.FC = (): JSX.Element => {

    const today: number = new Date().getTime() + (60 * 1000);  
    const [currentTimer, setTimer] = useState<number>(today);

    shuffleArray(questionsJSON);

    return (
        <QuestionContext.Provider value={questionsJSON}>
            <Container sx={{display: "flex", flexDirection: "column", alignItems: "center", height: "100vh"}} maxWidth = 'xs'>
                <br />
                <TimerDiv>
                    <CountdownTimer targetDate={currentTimer}/>
                </TimerDiv>
                <br />
                <QuestionsDiv>
                    <Outlet context={{currentTimer, setTimer}}/>
                </QuestionsDiv>
            </Container>
        </QuestionContext.Provider>
    );
};

export default Questions;