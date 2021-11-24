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
import Navigation from './components/navigation/index'
import Main from './components/main/index'
import   About from './components/main/about'
ReactDOM.render(
  // The provider will enable the child components to access the store

  <BrowserRouter>
  	<Header/>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="login" element={<LogIn />}/>
        <Route path="signUp" element={<SignUp />} />
     <Route path="dashboard" element={<Dashboard/>}/>
	 <Route path="nav" element={<Navigation/>}/>
	 <Route path="main" element={<Main/>}>
     <Route path="main" element={<About/>}/>
     </Route>
    </Routes>
	<Footer/>
  </BrowserRouter>,
  document.getElementById("root")
);
