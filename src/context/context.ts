import React from 'react';

interface IQuestion {
    question: string,
    answers: Array<string>
};

const QuestionContext = React.createContext<Array<IQuestion> | null>(null);

export default QuestionContext;