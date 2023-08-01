import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import NavBar from "./components/Navbar";
import Grid from '@mui/material/Grid';
import supper from "./images/lastsupper/finalcut.png"


function App() {
  const [section, setSection] = useState("Home");

  return (
    <div className="app">
      
      <NavBar section={section} setSection={setSection}/>
      <div className="main-content">
      <section className="home">
     
        {" current section is home "}
        <Grid container spacing={2}>
  <Grid item md={5}>
   <div  className="supper"> <img className="supper-img" src={supper} alt="Logo" /> </div>
  </Grid>
  <Grid item md={7}>
    <h3> Automate your TA</h3>
  <h1> Stop spending hours on manually checking your watch lists</h1>
  <h3> All-in-one TA tool to save you time</h3>
  
  </Grid>
</Grid>

      </section>
      <section className="about">
        {" "}
        current section is about
      </section>
      <section className="why">
        {" "}
        current section is why BBB will help you
      </section>
      <section className="roadmap">
        {" "}
        current section is roadmap
      </section>
      </div>
    </div>
  );
}

export default App;
