import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const  Header = () => {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="fw-bold">TNS Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-Link text-white-50" to="/home">Home</Link>
            <Link className="nav-Link text-white-50" to="/about">About</Link>
            {/* <Nav.Link href=""></Nav.Link>
            <Nav.Link href=""></Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

        </>
    )
}

export default Header;