import {Link, Outlet, useLocation} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import FooterComponent from "./footer.component";

const Header = () => {

    const location = useLocation();

    return (
        <div className="bg-flower">
            <Container className="bg-white transparent-opacity">
                <h1 className="main-header">Yasmin & Rafael</h1>
                <Navbar bg="light" expand="lg" className="justify-content-center">
                    <Container>
                        <Navbar.Brand href="/">Bem Vindo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#local-festa">Local da Festa</Nav.Link>
                                <Nav.Link href="mailto:rafael.veloso.lino@hotmail.com?subject=Confirmção de Presença">Confirmar Presença</Nav.Link>
                                <Nav.Link href="#link">Regras</Nav.Link>
                                <Link to={"/count"} className="text-decoration-none">
                                    <Nav.Link className={location.pathname === "/count" ? "active" : ""}
                                        href="#contagem-regressiga">Contagem Regressiva
                                    </Nav.Link>
                                </Link>
                                <Nav.Link href="#lista-presentes">Lista de Presentes</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
            <Outlet/>
            <FooterComponent/>
        </div>

    );
}

export default Header;