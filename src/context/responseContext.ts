import React from 'react';
import { IContextState } from '../interface/interface';

const initialValue: IContextState = {
    stateVar: -1,
    stateFunction: () => {}   
};

const ResponseContext = React.createContext<IContextState>(initialValue);

export default ResponseContext;