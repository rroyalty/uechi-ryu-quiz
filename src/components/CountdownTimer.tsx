import React, { useEffect } from 'react';
import { useCountdown } from '../hooks/useCountdown';
import Chip from '@mui/material/Chip';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useNavigate } from "react-router-dom";
import ResponseContext from '../context/responseContext';
import { IContextState, ITimer } from '../interface/interface'

const CountdownTimer: React.FC<IContextState> = (props): JSX.Element => {

  const responseContext: IContextState = React.useContext(ResponseContext);
  let responseState = responseContext.stateVar;

  useEffect(() =>{
    if (responseState === -1) {
      props.stateFunction(props.stateVar);
    } else if (responseState === 0) { 
      props.stateFunction(props.stateVar + 3000);
    } else {
      props.stateFunction(props.stateVar - 5000);
    }}, [responseState]);

  if (responseState === -1) {
    return (
      <ShowCounter
      currentTimer={props.stateVar}
    />
    )
  } else if (responseState === 0) {
      return <RightAnswer />;
  } else {
    return <WrongAnswer />;
  }
};


const ShowCounter: React.FC<ITimer> = (props): JSX.Element => {
  const [ minutes, seconds ] = useCountdown(props.currentTimer);
  const navigate = useNavigate();

  useEffect(() => {
    if  ( minutes + seconds <= 0 ) {
        navigate('/end');
    }; 
  }, [minutes, seconds])

  return (
      <Chip sx={{width: 260, height: 50, fontSize: 16}} icon={<AccessTimeIcon />} variant='outlined' color='primary' label={minutes + ' min : ' + seconds +' sec'} size='medium'/>
  );
};


const WrongAnswer: React.FC = (): JSX.Element => {
  return (
      <Chip sx={{width: 260, height: 50, fontSize: 16}} icon={<ThumbDownIcon />} variant='filled' color='error' label='-5 seconds!' size='medium'/>
  );
};

const RightAnswer: React.FC = (): JSX.Element => {
  return (
      <Chip sx={{width: 260, height: 50, fontSize: 16}} icon={<ThumbUpIcon />} variant='filled' color='success' label='+3 seconds!' size='medium'/>
  );
};

export default CountdownTimer;