import './App.css';
import Header from './layouts/Header';
import React from 'react'
import ButtonTop from './components/section/ButtonTop';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Body from "./layouts/Body";
import Projetos from "./pages/ProjetosPage";
import Contato from "./pages/ContatoPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Body />}/>
          <Route path="/projetos" element={<Projetos />}/>
          <Route path="/contato" element={<Contato />}/>
        </Routes>
      </Router>
      <ButtonTop/>
    </div>
  );
}

export default App;
