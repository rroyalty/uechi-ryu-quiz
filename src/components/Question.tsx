import { useParams } from "react-router-dom";
import React from 'react';
import QuestionContext from '../context/questionContext';
import QuestionCard from './QuestionCard';
import AnswerSet from './AnswerSet';

const Question: React.FC = (): JSX.Element => {

    const questionContext = React.useContext(QuestionContext);
    let params = useParams();
    let index: number = params.questionId ? parseInt(params.questionId) : -1;

    return(
        <> 
            <QuestionCard question = {questionContext[index].question} questionId = {index}/>
            <br />
            <AnswerSet answers = {questionContext[index].answers} questionId = {index}/>
        </>
    );
};

export default Question;
