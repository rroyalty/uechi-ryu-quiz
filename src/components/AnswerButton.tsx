import Button from '@mui/material/Button';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useNavigate, NavigateFunction } from "react-router-dom";
import ResponseContext from '../context/responseContext';
import { IContextState, IButton } from '../interface/interface'

interface INavigate extends IButton{
    navigate: NavigateFunction;
};

const AnswerButton: React.FC<IButton> = (props): JSX.Element => {

    const responseContext: IContextState = React.useContext(ResponseContext);
    const responseState = responseContext.stateVar;

    const navigate = useNavigate();

    if (responseState === -1) {
        return <WrongAnswer answer={props.answer} index={props.index} questionId={props.questionId} />;
      } else if (responseState === 1 ) {
        return <RightAnswer answer={props.answer} index={props.index} questionId={props.questionId} />;
      } else {
        return <NoAnswer answer={props.answer} index={props.index} questionId={props.questionId} navigate={navigate}/>;
      };
};


const NoAnswer: React.FC<INavigate> = (props): JSX.Element => {

    const responseContext: IContextState = React.useContext(ResponseContext);
    let responseState = responseContext.stateVar;
    const setResponse: Dispatch<SetStateAction<number>> = responseContext.stateFunction;

    useEffect(() => {
        if (props.index === 0) {
            setResponse(1)
        } else { 
            setResponse(-1)
        }
    }, [responseState])

    const handleClick = async (index: number, navigate: NavigateFunction, questionId: number ) => {

        if (index === 0) {
            // context[0].stateFunction(context[0].stateVar + 3000);
            responseState = 1;
        } else {
            // context[0].stateFunction(context[0].stateVar - 5000)
            responseState = -1;
        }
        await new Promise(r => setTimeout(r, 700));
        navigate(`/questions/${questionId+1}`);
        responseState = 0;
    }

    return (
        <Button sx={{height: 50, fontSize: 12}} variant="outlined" onClick={(e: React.MouseEvent) => handleClick(props.index, props.navigate, props.questionId)}>
            {props.answer}
        </Button>    );
  };

const WrongAnswer: React.FC<IButton> = (props): JSX.Element => {
    return (
        <Button color='error' sx={{height: 50, fontSize: 12}} variant="outlined">
            {props.answer}
        </Button>  );
};

const RightAnswer: React.FC<IButton> = (props): JSX.Element => {
    return (
        <Button color='success' sx={{height: 50, fontSize: 12}} variant="outlined">
            {props.answer}
        </Button> );
};

export default AnswerButton;
