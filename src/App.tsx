import React, { useState } from 'react';import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';

function App() {
  const [section, setSection] = useState('');

  return (
    <div className="App">
      <NavBar section={section} setSection={setSection}/>
umm hello
    </div>
  );
}

export default App;
