import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { usePassedContext } from '../views/Questions'
import React, { Dispatch, SetStateAction } from 'react';
import { useNavigate, NavigateFunction } from "react-router-dom";

interface IProps {
    answer: string,
    index: number,
    questionId: number
};

interface ContextType {
    stateVar: number,
    stateFunction: Dispatch<SetStateAction<number>>
};

interface ContextTypeArr extends Array<ContextType>{};

interface ContextTypeProp extends IProps{
    context: ContextTypeArr;
    navigate: NavigateFunction;
};

const handleClick = async (event: React.MouseEvent, index: number, context: ContextTypeArr, navigate: NavigateFunction, questionId: number) => {

    if (index == 0) {
        context[0].stateFunction(context[0].stateVar + 3000);
        context[1].stateFunction(1);

    } else {
        context[0].stateFunction(context[0].stateVar - 5000)
        context[1].stateFunction(-1);
    }
    await new Promise(r => setTimeout(r, 700));
    navigate(`/questions/${questionId+1}`);
    context[1].stateFunction(0);
}

const AnswerButton: React.FC<IProps> = (props): JSX.Element => {
    const context: ContextTypeArr = usePassedContext();
    const answer = props.answer;
    const index = props.index; 
    const questionId = props.questionId;
    const answerVar = context[1].stateVar
    const navigate = useNavigate();

    if (answerVar == -1) {
        return <WrongAnswer answer={answer} index={index} questionId={questionId} context={context} navigate={navigate}/>;
      } else if (answerVar == 1 ) {
        return <RightAnswer answer={answer} index={index} questionId={questionId} context={context} navigate={navigate}/>;
      } else {
        return <NoAnswer answer={answer} index={index} questionId={questionId} context={context} navigate={navigate}/>;
      };
};


const NoAnswer: React.FC<ContextTypeProp> = (props): JSX.Element => {
    return (
        <Button sx={{height: 50, fontSize: 12}}  
                     variant="outlined" onClick={(e: React.MouseEvent) => handleClick(e, props.index, props.context, props.navigate, props.questionId)}>
            {props.answer}
        </Button>    );
  };

const WrongAnswer: React.FC<ContextTypeProp> = (props): JSX.Element => {
    return (
        <Button color='error' sx={{height: 50, fontSize: 12}}  
                     variant="outlined" onClick={(e: React.MouseEvent) => handleClick(e, props.index, props.context, props.navigate, props.questionId)}>
            {props.answer}
        </Button>  );
};

const RightAnswer: React.FC<ContextTypeProp> = (props): JSX.Element => {
    return (
        <Button color='success' sx={{height: 50, fontSize: 12}}  
                     variant="outlined" onClick={(e: React.MouseEvent) => handleClick(e, props.index, props.context, props.navigate, props.questionId)}>
            {props.answer}
        </Button> );
};

export default AnswerButton;
