import {Dispatch, SetStateAction} from 'react';

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