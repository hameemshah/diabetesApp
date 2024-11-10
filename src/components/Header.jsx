import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import diabetesImage from '../assets/diabetes3.png';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className='header px-2 py-2'>
            <Navbar.Brand as={Link} to="/" className='brand'>
                <img src={diabetesImage} alt='brandLogo' style={{ height: "70px", width: "70px" }} />
                <span> DIABETES PREDICTOR</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link> 
                    <Nav.Link as={Link} to="/about">About</Nav.Link> 
                    <Nav.Link as={Link} to="/about">Contact</Nav.Link> 
                    <Nav.Link as={Link} to="/register">Register</Nav.Link> 
                    <Nav.Link as={Link} to="/login">Login</Nav.Link> 
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
