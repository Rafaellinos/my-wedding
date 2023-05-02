import {Container, Image} from "react-bootstrap";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Pic1 from "../assets/padrinho-convite1.png";
import Pic2 from "../assets/padrinho-convite2.png";
import Pic3 from "../assets/padrinho-convite3.png";
import Pic4 from "../assets/padrinho-convite4.png";
import Pic5 from "../assets/padrinho-convite5.png";
import Pic6 from "../assets/padrinho-convite6.png";
import Pic7 from "../assets/padrinho-convite7.png";
import Pic8 from "../assets/padrinho-convite8.png";
import Pic9 from "../assets/padrinho-convite9.png";



const Invitation = () => {
    return (
        <Container className="p-5">
            <Carousel showArrows={true} className="">
                <div>
                    <Image src={Pic1} />
                </div>
                <div>
                    <Image src={Pic2} />
                </div>
                <div>
                    <Image src={Pic3} />
                </div>
                <div>
                    <Image src={Pic4} />
                </div>
                <div>
                    <Image src={Pic5} />
                </div>
                <div>
                    <Image src={Pic6} />
                </div>
                <div>
                    <Image src={Pic7} />
                </div>
                <div>
                    <Image src={Pic8} />
                </div>
                <div>
                    <Image src={Pic9} />
                </div>
            </Carousel>
        </Container>
    )
}

export default Invitation;
