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
            <NavDropdown title="Практическая 5" id="nav-dropdown-5">
                <NavDropdown.Item as={Link} to={'/task6'}>Задание 1</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/task7'}>Задание 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Практическая 6" id="nav-dropdown-6">
                <NavDropdown.Item as={Link} to={'/task8'}>Задание 1</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Практическая 7" id="nav-dropdown-7">
                <NavDropdown.Item as={Link} to={'/task9'}>Задание 1</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Практическая 8" id="nav-dropdown-8">
                <NavDropdown.Item as={Link} to={'/task10'}>Задание 1</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Практическая 9" id="nav-dropdown-9">
                <NavDropdown.Item as={Link} to={'/task11'}>Задание 1</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/task12'}>Задание 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Практическая 10" id="nav-dropdown-10">
                <NavDropdown.Item as={Link} to={'/task13'}>Задание 1</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Практическая 11" id="nav-dropdown-11">
                <NavDropdown.Item as={Link} to={'/task14'}>Задание 1</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/task15'}>Задание 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Практическая 12" id="nav-dropdown-12">
                <NavDropdown.Item as={Link} to={'/task16'}>Задание 1</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
                <Nav.Link eventKey="link-1" title="Практическая 13-14" as={Link} to={'/task17'}> Практическая 13-14</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}