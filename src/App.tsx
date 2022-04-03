import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './views/Home';
import Questions from './views/Questions';
import Question from './components/Question';
import End from './components/End';


const App: React.FC = (): JSX.Element => {
  return (
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = 'questions' element = {<Questions />}>
          <Route path = ':questionId' element = {<Question />} />
          <Route path = 'end' element = {<End />} />
        </Route>
      </Routes>
  );
}

export default App;
