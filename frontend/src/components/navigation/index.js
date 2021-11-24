import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return <div className="App">Navigation component
	<Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
		<Container>
			<Navbar.Toggle aria-controls='responsive-navbar-nav'/>
			<Navbar.Collapse id='responsive-navbar-nav'/>
			<Nav>
				<Nav.Link href='/'>Home</Nav.Link>
				<Nav.Link href='/'>Permits</Nav.Link>
				<Nav.Link href='/'>Reports</Nav.Link>
				<Nav.Link href='/'>Notifications</Nav.Link>
				<Nav.Link href='/dashboard'>Dashboard</Nav.Link>
				<Nav.Link href='/'>Organ Donation</Nav.Link>
			</Nav>
		</Container>
	</Navbar>
	</div>;
};

export default Navigation;
