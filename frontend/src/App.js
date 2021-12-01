import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/main";
import About from "./components/main/about";
import HowTowork from "./components/main/htwork";
import ContactUs from "./components/main/contactUs";
import DashboardInfo from "./components/dashboard/info";

const App = () => {
  return (
    <div className="App">
      <br />
      <Main />
      <br />
      <About />
      <HowTowork />

      <ContactUs />
    </div>
  );
};

export default App;
