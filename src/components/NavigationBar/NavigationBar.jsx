import React, { useContext } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import { AuthContext } from "../../provider/AuthProvider";

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then()
        .then(error => {
            console.log(error)
        })
    }
  return (
    <Container className="mb-4">
        
      <Navbar collapseOnSelect expand="lg" bg="secondary-subtle">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand className="fw-bold" href="#">Spice Route</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="#pricing">About</ActiveLink>
            <ActiveLink to="/blog">Blog</ActiveLink>
            
          </Nav>
          <Nav>
            {user && <Image className="me-2" style={{height:'40px'}} title={user?.displayName} src={user.photoURL} roundedCircle />}
            {user ? <Link onClick={handleLogOut} to='/login'><Button variant="secondary">Logout</Button></Link>:
          <Link to='/login'><Button variant="secondary">Login</Button></Link>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
