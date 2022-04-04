import React from 'react';
import { IContextState } from '../interface/interface';

const initialValue: IContextState = {
    stateVar: 0,
    stateFunction: () => {}   
};

const ResponseContext = React.createContext<IContextState>(initialValue);

export default ResponseContext;