import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import LogIn from "./components/login";
import SignUp from "./components/signUp/signUp";
import Header from "./components/header";
import Footer from "./components/footer";
import App from "./App";
import Dashboard from "./components/dashboard";
import Navigation from "./components/navigation/index";
import Main from "./components/main/index";
import About from "./components/main/about";
import NextMain from "./components/main/afterLogin";
import HowTowork from './components/main/htwork'
import  ContactUs from './components/main/contactUs'
import  DashboardInfo from './components/dashboard/info'
// import Dashboard from './components/dashboard/index';
ReactDOM.render(
  // The provider will enable the child components to access the store

  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />

      </Route>
      <Route path="login" element={<LogIn />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="afterLogin" element={<NextMain />} />
             <Route path="htwork" element={<HowTowork/>}/>
             <Route path="cus" element={< ContactUs/>}/>
             <Route path="/dashinfo" element={< DashboardInfo/>}/>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>

    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
