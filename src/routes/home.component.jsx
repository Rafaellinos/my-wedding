import {Container, Image} from "react-bootstrap";
import './styles.css';
import MainWeddingPic from '../assets/casamento.png';

const Home = () => {
    return (
        <Container>
            <Container>
                <div className={"text-center my-5"}>
                    <Image
                        src={MainWeddingPic}
                        alt={"Yasmin and Rafael picture"}
                        className={"img-fluid rounded"}
                    />
                </div>
            </Container>
        </Container>
    )
}

export default Home;