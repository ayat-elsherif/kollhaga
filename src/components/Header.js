import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo.png";
class Header extends Component {
  state = { icon: "fa-search", isSearchBar: false };
  searchHelper = () => {
    if (this.state.icon === "fa-search") {
      this.setState({ icon: "fa-close", isSearchBar: true });
    } else {
      this.setState({ icon: "fa-search", isSearchBar: false });
    }
  };

  render() {
    return (
      <div>
        <header id="top" className="top-header">
          {/* <!-- Navigation --> */}
          <Navbar
            className="navbar navbar-default"
            expand="lg"
            data-spy="affix"
            data-offset-top="400"
          >
            <Container fluid>
              <Link to="/" className="navbar-brand">
                <img src={logo} alt="Site Logo" />
              </Link>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="navbar-right ms-auto">
                  <li>
                    <Link to="products">Products</Link>
                  </li>
                  {/* <NavDropdown title="Concert">
                    <NavDropdown.Item href="upcoming-concert.html">
                      Upcoming Concert
                    </NavDropdown.Item>
                    <NavDropdown.Item href="concert-single.html">
                      Single Concert
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  {/* <NavDropdown title="Gallery">
                    <NavDropdown.Item href="gallery-3-col.html">
                      3 Column
                    </NavDropdown.Item>

                    <NavDropdown.Item href="gallery-4-col.html">
                      4 Column
                    </NavDropdown.Item>
                  </NavDropdown> */}

                  <NavDropdown title={<i className="fas fa-cart-plus"></i>}>
                    <NavDropdown.Item>
                      <Link to="/store">Open Cart</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="faq.html">
                      FAQ Page
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav className="nav navbar-right search-nav">
                  <a
                    id="search-toggle"
                    className="search-toggle"
                    onClick={this.searchHelper}
                  >
                    <i className={"fa " + this.state.icon}></i>
                  </a>
                  <div
                    id="header-search-wrap"
                    className="header-search-wrap"
                    style={{
                      display: this.state.isSearchBar ? "block" : "none",
                    }}
                  >
                    <form className="header-search" action="#" method="post">
                      <input
                        type="search"
                        name="s"
                        placeholder="Search..."
                        required
                      />
                      <button type="submit" name="searchsubmit">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {/* <!-- Navigation End --> */}
        </header>
      </div>
    );
  }
}

export default Header;
