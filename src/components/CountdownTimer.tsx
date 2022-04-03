import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import Chip from '@mui/material/Chip';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface ITargetDate {
    targetDate: number
}

interface IMinutesSeconds {
    minutes: number,
    seconds: number
}

const CountdownTimer: React.FC<ITargetDate> = ({ targetDate }): JSX.Element => {
  const [ minutes, seconds ] = useCountdown(targetDate);

  if (minutes + seconds <= 0) {
    return <ExpiredNotice />;
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
        <Chip sx={{width: 260, height: 50, fontSize: 16}} icon={<AccessTimeIcon />} variant='outlined' color='primary' label={minutes + ' minutes, ' + seconds +' seconds'} size='medium'/>
    );
};

const ExpiredNotice: React.FC = (): JSX.Element => {
    return (
        <Chip sx={{width: 260, height: 50, fontSize: 16}} icon={<AccessTimeIcon />} variant='outlined' color='warning' label='Time is up!' size='medium'/>
    );
  };

export default CountdownTimer;