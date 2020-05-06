import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './HomePage';
import ProjectPage from './ProjectPage';

function App() {
  return (
    <div id='AppDiv'>
      <BrowserRouter>
        <Route path='/' component={HomePage} exact />
        <Route path='/:id' component={ProjectPage} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
