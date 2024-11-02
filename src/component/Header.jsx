import { Container, Navbar, Nav } from 'react-bootstrap'
import { AuthContext } from '../ContextProviders/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'

export default function Header() {

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = (e) => {
    e.preventDefault();
    logout();
    navigate('/');
  }

  return <>
    <Navbar className="navbar bg-body-tertiary " fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home">Bus Ticket Booking System</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user && <Nav>
            <Nav.Link href="bookTicket">Book Ticket</Nav.Link>
            <Nav.Link href="changePassword">Change Password</Nav.Link>
            <Nav.Link href="#" onClick={onLogout}>Logout</Nav.Link>
          </Nav>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>;
}