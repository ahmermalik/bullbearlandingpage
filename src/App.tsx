import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';

function App() {
    const navlinks = ['Home','Purpose','Roadmap','How to buy' ,'About'];

  return (
    <div className="App">
      <NavBar items={navlinks} />

    </div>
  );
}

export default App;
