import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import Chip from '@mui/material/Chip';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HourglassDisabledIcon from '@mui/icons-material/HourglassDisabled';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useNavigate } from "react-router-dom";

interface ITargetDate {
    targetDate: number,
    answerState: number
}

interface IMinutesSeconds {
    minutes: number,
    seconds: number
}

const CountdownTimer: React.FC<ITargetDate> = (props): JSX.Element => {
  const [ minutes, seconds ] = useCountdown(props.targetDate);
  const navigate = useNavigate();

  if (minutes + seconds <= 0) {
    navigate('/end');
    return <div />;
  } else if (props.answerState === -1) {
    return <WrongAnswer />;
  } else if (props.answerState === 1) {
    return <RightAnswer />;
  } else {
    return (
      <ShowCounter
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

const ShowCounter: React.FC<IMinutesSeconds> = ({ minutes, seconds }): JSX.Element => {
    return (
        <Chip sx={{width: 260, height: 50, fontSize: 16}} icon={<AccessTimeIcon />} variant='outlined' color='primary' label={minutes + ' min : ' + seconds +' sec'} size='medium'/>
    );
};

const WrongAnswer: React.FC = (): JSX.Element => {
  return (
      <Chip sx={{width: 260, height: 50, fontSize: 16}} icon={<ThumbDownIcon />} variant='outlined' color='error' label='-5 seconds!' size='medium'/>
  );
};

const RightAnswer: React.FC = (): JSX.Element => {
  return (
      <Chip sx={{width: 260, height: 50, fontSize: 16}} icon={<ThumbUpIcon />} variant='outlined' color='success' label='+3 seconds!' size='medium'/>
  );
};

export default CountdownTimer;