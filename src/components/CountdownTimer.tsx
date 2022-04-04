import React, { useState } from 'react';
import { useCountdown } from '../hooks/useCountdown';
import Chip from '@mui/material/Chip';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useNavigate } from "react-router-dom";
import ResponseContext from '../context/responseContext';
import { IContextState, ITimer } from '../interface/interface'

// const CountdownTimer: React.FC<ITargetDate> = (props): JSX.Element => {
const CountdownTimer: React.FC = (p): JSX.Element => {

  const today: number = new Date().getTime() + (60 * 1000); 
  const [currentTimer, setTimer] = useState<number>(today);
  const navigate = useNavigate();

  const responseContext: IContextState = React.useContext(ResponseContext);
  let responseState = responseContext.stateVar;

  if (currentTimer <= 0) {
    navigate('/end');
    return <div />;
  } else if (responseState === -1) {
    setTimer(currentTimer - 5000);
    return <WrongAnswer />;
  } else if (responseState === 1) {
    setTimer(currentTimer + 3000);
    return <RightAnswer />;
  } else {
    return (
      <ShowCounter
        currentTimer={currentTimer}
      />
    );
  }
};

const ShowCounter: React.FC<ITimer> = (props): JSX.Element => {
  const [ minutes, seconds ] = useCountdown(props.currentTimer);

  return (
      <Chip sx={{width: 260, height: 50, fontSize: 16}} icon={<AccessTimeIcon />} variant='outlined' color='primary' label={minutes + ' min : ' + seconds +' sec'} size='medium'/>
  );
};

const WrongAnswer: React.FC = (): JSX.Element => {
  return (
      <Chip sx={{width: 260, height: 50, fontSize: 16}} icon={<ThumbDownIcon />} variant='outlined' color='error' label='-3 seconds!' size='medium'/>
  );
};

const RightAnswer: React.FC = (): JSX.Element => {
  return (
      <Chip sx={{width: 260, height: 50, fontSize: 16}} icon={<ThumbUpIcon />} variant='outlined' color='success' label='+3 seconds!' size='medium'/>
  );
};

export default CountdownTimer;