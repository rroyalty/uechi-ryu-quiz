import React, { useState, useEffect  } from 'react';
import questionsJSON from '../static/questions.json';
import QuestionContext from '../context/questionContext';
import ResponseContext from '../context/responseContext';

import Questions from '../components/Questions'

import { IContextState } from '../interface/interface';
import { shuffleArray } from '../utils/utils'

const BeginGame: React.FC = (): JSX.Element => {

    useEffect(() => {
        shuffleArray(questionsJSON);
    }, []);

    console.log(questionsJSON)
    const [response, setResponse] = useState<number>(-1);
    const initialValue: IContextState = {"stateVar": response, "stateFunction": setResponse};

    return (
        <QuestionContext.Provider value={questionsJSON}>
            <ResponseContext.Provider value={initialValue}>
                <Questions />
            </ResponseContext.Provider>
        </QuestionContext.Provider>
    );
};

export default BeginGame;