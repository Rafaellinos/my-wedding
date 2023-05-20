import {Container, Image} from "react-bootstrap";
import BistroMariaRosaPic from "../assets/bistro_maria_rosa.jpg"


const LocationComponent = () => {
    return (
        <Container className="">
            <div className="main-title">
                <Container className={"mt-5"}>
                    <div className={"row justify-content-center"}>
                        <div className={"col main-location-info"}>
                            <div className="text-center bg-white footer">
                                <iframe
                                    title="google-maps"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.59179456155!2d-46.62120694885336!3d-23.475184564227032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef65b3c15c91b%3A0x677d762df0a68a05!2sAv.%20%C3%81gua%20Fria%2C%201608%20-%20Tucuruvi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002332-001!5e0!3m2!1sen!2sbr!4v1674128392155!5m2!1sen!2sbr"
                                    style={{border: 0}} allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"/>
                            </div>
                            <div className={"text-center"}>
                                <Image
                                    src={BistroMariaRosaPic}
                                    alt={"bistro maria rosa faxada foto"}
                                    className={"img-fluid rounded"}
                                />
                            </div>
                        </div>
                    </div>
                </Container>
                <div>
                    <div className="row mt-4">
                        <div className="text-center">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Av. Água Fria, 1608 Tucuruvi, São Paulo S.P. - 02332-001</li>
                                {/*<li className="list-group-item">Outubro - 21.10.2023</li>*/}
                                {/*<li className="list-group-item">18:30 às 21:00</li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default LocationComponent;