import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useTimerContext } from '../views/Questions'
import React, {useEffect, Dispatch, SetStateAction} from 'react';


interface IProps {
    answer: string,
    index: number,
    questionId: number
};

interface ContextType {
    currentTimer: number,
    setTimer: Dispatch<SetStateAction<number>>
};

const handleClick = (event: React.MouseEvent, index: number, timer: ContextType) => {
    if (index == 0) {
        timer.setTimer(timer.currentTimer + 3000)
    } else {
        timer.setTimer(timer.currentTimer - 5000)
    }
}

const AnswerButton: React.FC<IProps> = (props): JSX.Element => {
    const timer: ContextType = useTimerContext();

    return (
        <Button sx={{height: 50, fontSize: 12}} component={Link} to={'/questions/' + (props.questionId+1)} variant="outlined" onClick={(e: React.MouseEvent) => handleClick(e, props.index, timer)}>
            {props.answer}
        </Button>
    )
};

export default AnswerButton;
