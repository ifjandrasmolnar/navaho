import "./NavbarComponent.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  return (
    <Navbar expand="md" className="navbar-clear fixed-top">
      <Container className="justify-content-center navbar-container">
        <Navbar.Toggle
          style={{ filter: "invert(100%)" }}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="justify-content-center gap-3 navbar-items">
            <Nav.Link
              href="#"
              className="nav-btn align-items-center d-flex text-center"
            >
              <span>EGYSZERŰ KERESÉS</span>
            </Nav.Link>
            <Nav.Link
              href="#"
              className="nav-btn align-items-center d-flex text-center"
            >
              <span>ÖSSZETETT KERESÉS</span>
            </Nav.Link>
            <Nav.Link
              href="#"
              className="nav-btn align-items-center d-flex text-center"
            >
              <span>LELTÁRAK</span>
            </Nav.Link>
            <Nav.Link
              href="#"
              className="nav-btn align-items-center d-flex text-center"
            >
              <span>GYŰJTEMÉNYEK</span>
            </Nav.Link>
            <Nav.Link
              href="#"
              className="nav-btn align-items-center d-flex text-center"
            >
              <span>SZÓTÁRAK</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComponent;
