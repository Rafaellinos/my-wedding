import {Outlet} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import FooterComponent from "./footer.component";

const Header = () => {

    return (
        <div className="bg-flower">
            <div className="navbar-expand-lg rounded transparent-opacity bg-serenity">
                    <Navbar expand="sm">
                        <Container className="font-lato">
                            <Navbar.Brand href="/" className="main-header">
                                <span className="bg-header-color">Yasmin & Rafael</span>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                                <Nav className="text-uppercase">
                                    <Nav.Link href="#local-festa">
                                        <span className="bg-header-color menu-items">Local da Festa</span>
                                    </Nav.Link>
                                    <Nav.Link href="/confirmar-presenca">
                                        <span className="bg-header-color menu-items">Confirmar Presença</span>
                                    </Nav.Link>
                                    <Nav.Link href="/manual-convidados">
                                        <span className="bg-header-color menu-items">Manual do Convidado</span>
                                    </Nav.Link>
                                    <Nav.Link href="/lista-presentes">
                                        <span className="bg-header-color menu-items">Lista de Presentes</span>
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
            </div>
            <Outlet/>
            <FooterComponent/>
        </div>

    );
}

export default Header;