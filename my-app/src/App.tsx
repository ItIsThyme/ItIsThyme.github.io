import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomAppBar from './components/CustomAppBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import AboutMe from './pages/AboutMe';
import Experiments from './pages/Experiments';
import Games from './pages/Games';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="me" element={<AboutMe />} />
          <Route path="experiments" element={<Experiments />} />
          <Route path="games" element={<Games />} />
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
