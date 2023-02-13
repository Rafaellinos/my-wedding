import {Container, Image} from "react-bootstrap";
import './styles.css';
import MainWeddingPic from '../assets/casamento.png';
import CountComponent from "../components/count.component";

const Home = () => {
    return (
        <Container>
            <Container>
                <div className={"text-center my-5"}>
                    <p className="text-uppercase">
                        Vamos nos Casar!
                    </p>
                    <p>
                        <strong>21 de Outubro de 2023</strong>
                    </p>
                    <Image
                        src={MainWeddingPic}
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