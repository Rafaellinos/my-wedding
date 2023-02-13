import {Outlet, useLocation} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import FooterComponent from "./footer.component";

const Header = () => {

    const location = useLocation();

    return (
        <div className="bg-flower">
            <Container className="bg-white transparent-opacity">
                <h1 className="main-header">Yasmin & Rafael</h1>
                <Container className="text-uppercase">
                    <Navbar expand="sm">
                        <Container className="font-lato">
                            {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                                <Nav>
                                    <Nav.Link href="/" className={location.pathname === "/" ? "active-menu": ""}>Início</Nav.Link>
                                    <Nav.Link href="/sobre-nos">Sobre Nós</Nav.Link>
                                    <Nav.Link href="#local-festa">Local da festa</Nav.Link>
                                    <Nav.Link href="/#contagem-regressiga">Contagem Regressiva</Nav.Link>
                                    <Nav.Link href="mailto:rafael.veloso.lino@hotmail.com?subject=Confirmção de Presença">Confirmar Presença</Nav.Link>
                                    <Nav.Link href="/manual-convidados">Manual do Convidado</Nav.Link>
                                    <Nav.Link href="/lista-presentes">Lista de Presentes</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </Container>
            <Outlet/>
            <FooterComponent/>
        </div>

    );
}

export default Header;