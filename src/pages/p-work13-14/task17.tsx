import { Navbar, Nav, Modal, Button, NavDropdown, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import {Link} from 'react-router-dom'

export function Task17 () {
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleShowMessageModal = () => {
    setShowMessageModal(true);
  };

  const handleCloseMessageModal = () => {
    setShowMessageModal(false);
  };

  const handleAbout = () => {
    alert("About my app");
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className='mb-3'>
        <Navbar.Brand href="#">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="File" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleShowMessageModal} disabled={!isChecked}>Message</NavDropdown.Item>
              <NavDropdown.Item onClick={handleCheck}>Check</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/'}>Exit</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown title="Help" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleAbout}>About</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={showMessageModal} onHide={handleCloseMessageModal}>
        <Modal.Header closeButton>
          <Modal.Title>Message with your surname</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Моя фамилия: Рандин
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseMessageModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <ButtonGroup>
        <DropdownButton as={ButtonGroup} title="File" id="bg-nested-dropdown">
          <Dropdown.Item onClick={handleShowMessageModal} disabled={!isChecked}>Message</Dropdown.Item>
          <Dropdown.Item onClick={handleCheck}>Check</Dropdown.Item>
          <Dropdown.Item as={Link} to={'/'}>Exit</Dropdown.Item>
        </DropdownButton>
        <DropdownButton as={ButtonGroup} title="Help" id="bg-nested-dropdown">
          <Dropdown.Item  onClick={handleAbout}>About</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
    </>
  );
}