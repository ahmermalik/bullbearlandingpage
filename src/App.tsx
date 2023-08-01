import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import NavBar from "./components/Navbar";
import Grid from "@mui/material/Grid";
import buddymain from "./images/bull/rightnbg.png";
import supper from "./images/lastsupper/finalcut.png";

function App() {
  const [section, setSection] = useState("Home");

  return (
    <div className="app">
      <span className="nav-bar">
        {" "}
        <NavBar section={section} setSection={setSection} />{" "}
      </span>

      <div className="main-content">
        <section className="home">
          <div className="hero">
            <span className="welcome-hero">
              {" "}
              <img className="supper-img" src={supper} alt="Logo" />{" "}
            </span>

            <h1 className="hero-text">
              {" "}
              {`"The strength of the team is each individual member. The strength of each member is the team." - Phil Jackson`}
            </h1>
          </div>
          <Grid container spacing={2}>
            <Grid item md={5}>
              <div className="welcome-home">
                {" "}
                <img className="buddy-img" src={buddymain} alt="Logo" />{" "}
              </div>
            </Grid>
            <Grid item md={7}>
              <h3 className="welcome-subheading">
                Fastest Technical Analysis Algorithm
              </h3>
              <h1 className="welcome-title">
                {" "}
                Stop spending hours on manually checking your watch lists
              </h1>
              <h3 className="welcome-subheading">
                {" "}
                All-in-one TA tool to save you time
              </h3>
            </Grid>
          </Grid>
        </section>
        <section className="about"> current section is about</section>
        <section className="why">
          {" "}
          current section is why BBB will help you
        </section>
        <section className="roadmap"> current section is roadmap</section>
      </div>
    </div>
  );
}

export default App;
