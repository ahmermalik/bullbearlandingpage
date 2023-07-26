import React, { useState } from 'react';import logo from './logo.svg';
import './App.scss';
import NavBar from './components/Navbar';

function App() {
  const [section, setSection] = useState('');

  return (
    <div className="App">
      <NavBar section={section} setSection={setSection}/>
<div className="currentsection"> current section is {section}</div>
    </div>
  );
}

export default App;
