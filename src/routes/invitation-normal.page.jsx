import {Container, Image} from "react-bootstrap";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Invite1 from "../assets/16.png";
import Invite2 from "../assets/18.png";
import {useNavigate} from "react-router-dom";


const InvitationNormal = () => {
    const navigate = useNavigate();
    return (
        <Container className="" style={{maxWidth: '100%'}}>
            <Carousel
                showArrows={true}
                className="mt-5"
                autoPlay={true}
                interval={3000}
                swipeable={true}
                infiniteLoop={false}
                showThumbs={false}
                showIndicators={false}
                useKeyboardArrows={true}
                onClickItem={(idx, item) => {
                    if (idx === 1) {
                        navigate("/confirmar-presenca")
                    }
                }}
            >
                <div>
                    <Image src={Invite1} />
                </div>
                <div>
                    <a href="/confirmar-presenca"><Image src={Invite2} /></a>
                </div>
            </Carousel>
        </Container>
    )
}

export default InvitationNormal;
