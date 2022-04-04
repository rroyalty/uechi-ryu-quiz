import React from 'react';
import { IQuestion } from '../interface/interface'

const initialValue: Array<IQuestion> = [
    {
        question: '',
        answers: []
    }
];

const QuestionContext = React.createContext<Array<IQuestion>>(initialValue);

export default QuestionContext;