import { Container, Navbar } from 'react-bootstrap'

export default function Header() {
  return <>
    <Navbar className="navbar bg-body-tertiary " fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home">Bus Ticket Booking System</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#login">Login</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>;
}