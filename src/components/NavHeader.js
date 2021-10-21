import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
class NavHeader extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">
              <Link to="/">
                <img src={logo} />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {/* <Link to="#features">Features</Link>
                <Link to="">Pricing</Link> */}
              </Nav>
              <Nav>
                <Link to="/store">
                  <div>
                    <i className="fas fa-cart-plus"></i> Cart
                  </div>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavHeader;
