import React from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";

const Navbar = ({ setPage }) => {
  return (
    <BootstrapNavbar bg="dark" variant="dark">
      <Container>
        <BootstrapNavbar.Brand>Expenses Tracker</BootstrapNavbar.Brand>

        <Nav>
          <Nav.Link onClick={() => setPage("dashboard")}>
            Dashboard
          </Nav.Link>
          <Nav.Link onClick={() => setPage("addCategory")}>
            Add Category
          </Nav.Link>
          <Nav.Link onClick={() => setPage("viewTable")}>
            View Expenses
          </Nav.Link>
          <Nav.Link onClick={() => setPage("login")}>
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
