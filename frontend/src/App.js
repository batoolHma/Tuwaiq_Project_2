import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/main";
import About from "./components/main/about";

const App = () => {
  return (
    <div className="App">
      <br />
      <Main />
      <br />
      <About />
    </div>
  );
};

export default App;
