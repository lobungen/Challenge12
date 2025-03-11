// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
        <Nav variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/">Lee Obungen</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/About" eventKey="link-1">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Profile" eventKey="link-2">
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/ContactMe" eventKey="link-2">
            Contact Me
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Resume" eventKey="link-2">
            Resume
          </Nav.Link>
        </Nav.Item>
      </Nav>
  );
}
