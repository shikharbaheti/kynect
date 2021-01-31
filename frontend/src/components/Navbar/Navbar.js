import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
    return (
        <div className="Navbar">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Kynect</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/jobs">Jobs</Nav.Link>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;  