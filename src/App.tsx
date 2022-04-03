import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './views/Home';
import Questions from './views/Questions';
import Question from './components/Question';
import End from './components/End';


const App: React.FC = (): JSX.Element => {
  return (
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = 'end' element = {<End />} />
        <Route path = 'questions' element = {<Questions />}>
          <Route path = ':questionId' element = {<Question />} />
        </Route>
        <Route path = '*' element = {<Home />}  />
      </Routes>
  );
}

export default App;
