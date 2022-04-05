import {Dispatch, SetStateAction} from 'react';
import { NavigateFunction } from "react-router-dom";

export interface IContextState {
    stateVar: number,
    stateFunction: Dispatch<SetStateAction<number>>
};

export interface IQuestion {
    question: string,
    answers: Array<string>
};

export interface ITimer {
    currentTimer: number
};

export interface IButton {
    answer: string,
    index: number,
    questionId: number
};

export interface IAnswersNumbered {
    element: string,
    index: number
};

export interface IAnswerSetProps {
    answers: Array<string>,
    questionId: number
};

export interface INavigate extends IButton{
    navigate: NavigateFunction;
};