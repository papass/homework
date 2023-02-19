import { Nav, NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../App.css'

export function Navigation () {
    return (
        <Nav className="nav">
             <Nav.Item>
                <Nav.Link href="/home"><Link to={'/'}  className="nav_item">Home</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1"></Nav.Link>
            </Nav.Item>
            <NavDropdown title="Практическая 3" id="nav-dropdown-3">
                <NavDropdown.Item as={Link} to={'/task1'}>Задание 1</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/task2'}>Задание 2</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/task3'}>Задание 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Практическая 4" id="nav-dropdown-4">
                <NavDropdown.Item as={Link} to={'/task4'}>Задание 1</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/task5'}>Задание 2</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}