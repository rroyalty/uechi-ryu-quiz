import AnswerButton from './AnswerButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import { IAnswersNumbered, IAnswerSetProps } from '../interface/interface';
import { shuffleArray } from '../utils/utils';
import React, { useEffect, useState } from 'react';
import ResponseContext from '../context/responseContext';
import { IContextState } from '../interface/interface'

const AnswerSet: React.FC<IAnswerSetProps> = (props): JSX.Element => {

    const responseContext: IContextState = React.useContext(ResponseContext);
    const responseState = responseContext.stateVar;

    const [answerArray, setAnswerArray] = useState<Array<IAnswersNumbered>>(props.answers.map((element: string, index: number) => ({element, index})));
    const [highScore, setHighScore] = useState<number>(parseInt(JSON.parse(localStorage.getItem("uechiHighScore") || "0")));
    const [currentScore, setCurrentScore] = useState<number>(0);

    useEffect(() => {
        if (currentScore > highScore) {
            setHighScore(currentScore);
            localStorage.setItem("uechiHighScore", JSON.stringify(highScore));
        }
    }, [currentScore])

    useEffect(() => {
        console.log(responseState);
        if (responseState === 0) {
            setCurrentScore(currentScore + 1);
        }
    }, [responseState])

    useEffect(() => {
        let tempArray = [...props.answers.map((element: string, index: number) => ({element, index}))];
        shuffleArray(tempArray);
        setAnswerArray(tempArray);
    }, [props.answers]);

    return (
        <ButtonGroup orientation='vertical' sx={{width: 260, height: 200}}>
            {answerArray?.map((element: IAnswersNumbered) => {
                return(
                    <AnswerButton key={element.index} answer={element.element} index={element.index} questionId = {props.questionId} />
                );
            })}
        </ButtonGroup>
    );
};

export default AnswerSet;
