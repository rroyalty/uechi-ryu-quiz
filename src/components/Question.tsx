import styled from '@emotion/styled';
import { useParams } from "react-router-dom";
import React from 'react';
import QuestionContext from '../context/context';
import QuestionCard from './QuestionCard';
import AnswerSet from './AnswerSet';
import Errors from './Errors';

const QuestionDiv = styled.div`
`

let errorMsg: string;

const Question: React.FC = (): JSX.Element => {

    const questionContext = React.useContext(QuestionContext);
    let params = useParams();
    let index: number = params.questionId ? parseInt(params.questionId) : -1;

    const CheckIndex: React.FC = (): JSX.Element => {
        if(index === -1) {
            errorMsg = 'ERROR: No questions found to load.'

            return (
                <Errors error={errorMsg} />
            );
        } else if (questionContext) {
                    return(
                        <> 
                            <QuestionCard question = {questionContext[index].question} questionId = {index}/>
                            <br />
                            <AnswerSet answers = {questionContext[index].answers} questionId = {index}/>
                        </>
                    );
        } else {
            errorMsg = 'ERROR: There was an error loading the questions into the application.'

            return (
                <Errors error={errorMsg} />
            );
        };
    };

    return(
        <QuestionDiv>
            <CheckIndex />
        </QuestionDiv>
    );
};

export default Question;
