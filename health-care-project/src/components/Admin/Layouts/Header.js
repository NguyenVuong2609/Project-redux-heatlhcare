import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import AvatarUser from '../../Avatar';
import "../admin.css"

function TextLinkExample() {
  return (
    <Navbar className='admin-header'>
      <Container>
        <Navbar.Brand href="#home">Admin Page</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <AvatarUser/>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;
