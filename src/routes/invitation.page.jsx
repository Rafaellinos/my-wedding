import {Container, Image} from "react-bootstrap";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Pic1 from "../assets/padrinhoconvite-1.png";
import Pic2 from "../assets/padrinhoconvite-2.png";
import Pic3 from "../assets/padrinhoconvite-3.png";
import Pic4 from "../assets/padrinhoconvite-4.png";
import Pic5 from "../assets/padrinhoconvite-5.png";
import Pic6 from "../assets/padrinhoconvite-6.png";
import Pic7 from "../assets/padrinhoconvite-7.png";
import Pic8 from "../assets/padrinhoconvite-8.png";
import Pic9 from "../assets/padrinhoconvite-9.png";



const Invitation = () => {
    return (
        <Container className="p-5 fit-invitation">
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
