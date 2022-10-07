import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";

//document.body.style = 'background: #151718;';
document.body.style = '  background: linear-gradient( to right,#151718,#1b1d1e); -webkit-background-clip: text;';

function App() {
  return (

    <div>
          <style>
      background: "green";
    </style>
      <Navbar />
      <Header />
      <Section />
    </div>
  );
}

export default App;
