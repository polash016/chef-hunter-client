import React, { useContext } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

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
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to='/'>Home</Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
            
          </Nav>
          <Nav>
            {/* {user && <FaUserCircle></FaUserCircle>} */}
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
