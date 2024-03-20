import LogoNetflix from "../assets/netflix_logo.png";
import Avatar from "../assets/avatar.png";
import { Component } from "react";
import { Dropdown, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import { BsFillBellFill, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

class MyNavbar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Brand>
          <img src={LogoNetflix} id="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Link to="/seconda" className="nav-link">
              seconda
            </Link>
            <Link to="/prima" className="nav-link">
              prima
            </Link>
            <Link to="/terza" className="nav-link">
              terza{" "}
            </Link>
          </Nav>
          <Nav id="avatarZone">
            <BsSearch className="navbar-icon" />
            <BsFillBellFill className="navbar-icon" />
            <Nav.Link>Marco</Nav.Link>
            <NavDropdown title={<img src={Avatar} id="logo" alt="propic" />}>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavbar;
