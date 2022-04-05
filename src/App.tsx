import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './views/Home';
import BeginGame from './views/BeginGame';
import Question from './components/Question';
import End from './views/End';


const App: React.FC = (): JSX.Element => {
  return (
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = 'end' element = {<End />} />
        <Route path = 'questions' element = {<BeginGame />}>
          <Route path = ':questionId' element = {<Question />} />
        </Route>
        <Route path = '*' element = {<Home />}  />
      </Routes>
  );
}

export default App;
