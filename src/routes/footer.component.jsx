import {Fragment} from "react";


const FooterComponent = () => {
    return (
        <Fragment>
            <footer className="" style={{
                bottom: 0, position: "fixed",
                left: 0, width: "100%"
            }}>
                <footer className="text-white text-center text-lg-start bg-serenity transparent-opacity">
                    <div className="text-center p-3">
                        © 2023 Copyright:
                        <span className="text-white">yasmin.rafaellino.com.br</span>
                    </div>
                </footer>
            </footer>
        </Fragment>
    )
}

export default FooterComponent;
