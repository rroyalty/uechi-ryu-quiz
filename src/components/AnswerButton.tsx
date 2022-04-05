import Button from '@mui/material/Button';
import React, { Dispatch, SetStateAction } from 'react';
import { useNavigate, NavigateFunction } from "react-router-dom";
import ResponseContext from '../context/responseContext';
import { IContextState, IButton, INavigate } from '../interface/interface'


const AnswerButton: React.FC<IButton> = (props): JSX.Element => {

    const responseContext: IContextState = React.useContext(ResponseContext);
    const responseState = responseContext.stateVar;
    const navigate = useNavigate();

    if (responseState !== 0 && responseState === props.index) {
        return <WrongAnswer answer={props.answer} index={props.index} questionId={props.questionId} />;
      } else if (responseState === 0 && props.index===0 ) {
        return <RightAnswer answer={props.answer} index={props.index} questionId={props.questionId} />;
      } else {
        return <NoAnswer answer={props.answer} index={props.index} questionId={props.questionId} navigate={navigate}/>;
      };
};


const NoAnswer: React.FC<INavigate> = (props): JSX.Element => {

    const responseContext: IContextState = React.useContext(ResponseContext);
    const setResponse: Dispatch<SetStateAction<number>> = responseContext.stateFunction;

    const handleClick = async (e: React.MouseEvent, index: number, navigate: NavigateFunction, questionId: number ) => {
        setResponse(index);
        await new Promise(r => setTimeout(r, 700));
        setResponse(-1);
        navigate(`/questions/${questionId+1}`);
    };

    return (
        <Button sx={{height: 50, fontSize: 12}} variant="outlined" onClick={(e: React.MouseEvent) => handleClick(e, props.index, props.navigate, props.questionId)}>
            {props.answer}
        </Button>);
  };

const WrongAnswer: React.FC<IButton> = (props): JSX.Element => {
    return (
        <Button color='error' sx={{height: 50, fontSize: 12}} variant="contained">
            {props.answer}
        </Button>  );
};

const RightAnswer: React.FC<IButton> = (props): JSX.Element => {
    return (
        <Button color='success' sx={{height: 50, fontSize: 12}} variant="contained">
            {props.answer}
        </Button> );
};

export default AnswerButton;
