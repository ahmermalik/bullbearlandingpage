import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import NavBar from "./components/Navbar";
import Grid from "@mui/material/Grid";
import bull from "./images/bull/rightnbg.png";
import supper from "./images/lastsupper/finalcut.png";
import bear from "./images/bear/bearleftnbg.png"
import Quote from "./components/Quote";
import Roadmap from "./components/Roadmap";
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});


function App() {
  const [section, setSection] = useState("Home");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const words = [
    "a community",
    "not wasting time on charts",
    "independent",
    "aware of the power of A.I.",
    "an enjoyooor of saving time",
    "a meme",
    // "on the grind",
    // "loyal",
    // "trying to make it",
    // "resilient",
    // "compassionate",
    // "kind",
    // "hell bent on retiring",
    // "consistent",
    // "committed",
    // "always there",
    // "trust worthy",
    // "dependable",
    "not giving you financial advice",
  ]; // replace with your words
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // change word every 3 seconds

    // Clean up function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [words]);

  return (
    <ThemeProvider theme={theme}>
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
            {/* <h1 className="hero-text">
              {" "}
              {`"The strength of the team is each individual member. The strength of each member is the team." - Phil Jackson`}
            </h1> */}

          </div>
          <div> <Quote/> </div>
          
          <Grid container spacing={2}>
            <Grid item md={3}>
              <div className="welcome-home">
                {" "}
                <img className="animol" src={bull} alt="Logo" />{" "}
              </div>
            </Grid>
            <Grid item md={6}>
              <h3>What is this?</h3>
            <h3 className="bbb-is">
              Bull Bear Buddy is
              <span className="bbb-descrip"> {words[currentWordIndex]}</span>
            </h3>
              <h3 className="welcome-subheading">
                Who is this community for?
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
            <Grid item md={3}>
              <div className="welcome-home">
                {" "}
                <img className="animol" src={bear} alt="Logo" />{" "}
              </div>
            </Grid>
          </Grid>
        </section>
       

        <section className="about"> </section>
        <section className="roadmap"> <Roadmap/></section>
        <section className="why">
          {" "}
         
        </section>
 
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
