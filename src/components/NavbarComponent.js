import React from "react"
import { Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import logo from "../assets/brand.png"


const NavbarComponent = () => {
    return (
        <div>
            <Navbar >
                <Container>
                    <Navbar.Brand>
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt=""
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/kanban"}>Kanban</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent;