import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import NavBar from "./components/Navbar";

function App() {
  const [section, setSection] = useState("Home");

  return (
    <div className="App">
      <NavBar section={section} setSection={setSection} />
      <section className="home currentsection">
        {" "}
        current section is home
      </section>
      <section className="about">
        {" "}
        current section is about
      </section>
      <section className="why">
        {" "}
        current section is why
      </section>
      <section className="roadmap">
        {" "}
        current section is roadmap
      </section>
    </div>
  );
}

export default App;
