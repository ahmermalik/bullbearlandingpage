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
        current section is {section}
      </section>
      <section className="about">
        {" "}
        current section is {section}
      </section>
      <section className="why">
        {" "}
        current section is {section}
      </section>
      <section className="roadmap">
        {" "}
        current section is {section}
      </section>
    </div>
  );
}

export default App;
