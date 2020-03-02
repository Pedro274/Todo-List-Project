import React from 'react';
import './App.scss';
import {BrowserRouter} from 'react-router-dom';

import Web from '../Web/Web'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Web/>
      </BrowserRouter>
    </div>
  );
}

export default App;
