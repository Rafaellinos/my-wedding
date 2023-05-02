import {Outlet} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import FooterComponent from "./footer.component";

const Header = () => {

    // const location = useLocation();

    return (
        <div className="bg-flower">
            <Container className="rounded transparent-opacity bg-serenity">
                <Container>
                    <Navbar expand="sm">
                        <Container className="font-lato">
                            <Navbar.Brand href="/" className="main-header">Yasmin & Rafael</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                                <Nav className="text-uppercase">
                                    {/*<Nav.Link href="/" className={location.pathname === "/" ? "active": ""}>Início</Nav.Link>*/}
                                    {/*<Nav.Link href="/sobre-nos">Sobre Nós</Nav.Link>*/}
                                    <Nav.Link href="#local-festa">Local da festa</Nav.Link>
                                    {/*<Nav.Link href="/#contagem-regressiga">Contagem Regressiva</Nav.Link>*/}
                                    <Nav.Link href="/confirmar-presenca">Confirmar Presença</Nav.Link>
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