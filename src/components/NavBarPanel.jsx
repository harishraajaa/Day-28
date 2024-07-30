import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const CartProducts = useSelector((state) => state.cart);

  return (
    <Navbar expand="lg" className="Nav fixed-header">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="text-white"> 
          <span className="shopping">Harish Shopping App</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/" className="text-white opt">
              Products
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart" className="text-white opt">
              My Cart ({CartProducts.length})
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
