import React from 'react';
// import { Route } from 'react-router-dom';
// import { Routes } from 'react-router';
// import { BrowserRouter as Router} from 'react-router-dom';
import LogIn from './components/login';
import SignUp from './components/signUp/signUp';
import Header from './components/header';
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/dashboard';
import Main from './components/main';
import About from './components/main/about';

const App = () => {
	return <div className="App">
		{/* <Header/> */}
	
		<br/>
	<Main/>
	<br/>
	<About/>
	
	</div>;
	
	
	
};

export default App;
