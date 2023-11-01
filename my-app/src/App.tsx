import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomAppBar from './components/CustomAppBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomAppBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
