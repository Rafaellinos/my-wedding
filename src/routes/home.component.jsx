import {Container, Image} from "react-bootstrap";
import './styles.css';
import MainCollage from '../assets/love_collage02.png';
import CountComponent from "../components/count.component";

const Home = () => {
    return (
        <Container>
            <Container>
                <div className={"text-center m-2"}>
                    <Image
                        src={MainCollage}
                        alt={"Yasmin and Rafael picture"}
                        className={"img-fluid rounded"}
                    />
                    <CountComponent/>
                </div>
            </Container>
        </Container>
    )
}

export default Home;