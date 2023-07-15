import {Container, Image} from "react-bootstrap";
import './styles.css';
import MainCollage from '../assets/collage_we.png';
import CountComponent from "../components/count.component";

const Home = () => {
    return (
        <Container>
            <Container>
                <div className={"text-center m-2"}>
                    <div className="m-3 main-title">
                        <h2 style={{fontWeight: "bold"}}>VAMOS NOS CASAR!</h2>
                        <span>21.10.23</span>
                    </div>
                    <Image
                        src={MainCollage}
                        alt={"Yasmin and Rafael picture"}
                        className={"m-1 img-fluid rounded collage-main-page"}
                    />
                    <div className="mt-3 main-title">
                        <h3 style={{fontWeight: "bold"}}>Faltam...</h3>
                    </div>
                    <CountComponent/>
                </div>
            </Container>
        </Container>
    )
}

export default Home;