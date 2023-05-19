import {Fragment} from "react";
import {Outlet} from "react-router-dom";
import FooterComponent from "./footer.component";
import HeaderComponent from "./header.component";
import {Container} from "react-bootstrap";


const WrapperComponent = () => {
    return (
        <Fragment>
            <div className="bg-flower">
                <HeaderComponent/>
                <Container>
                    <div className="flex-grow-1">
                        <Outlet/>
                    </div>
                </Container>
                <FooterComponent/>
            </div>
        </Fragment>
    )
}

export default WrapperComponent;