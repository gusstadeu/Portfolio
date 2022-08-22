import './App.css';
import Body from './layouts/Body';
import Header from './layouts/Header';
import React from 'react'
import ButtonTop from './components/section/ButtonTop';


function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <ButtonTop/>
    </div>
  );
}

export default App;
