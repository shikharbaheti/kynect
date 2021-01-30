import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
    return (
        <div className="Navbar">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Kynect</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Login</Nav.Link>
                    <Nav.Link href="#pricing">Jobs</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;  