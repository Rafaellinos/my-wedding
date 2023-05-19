import {Container, Image} from "react-bootstrap";
import './styles.css';
import MainCollage from '../assets/love_collage02.png';
import CountComponent from "../components/count.component";

const Home = () => {
    return (
        <Container>
            <Container>
                <div className={"text-center m-2"}>
                    <div className="m-3 main-title">
                        <h2 style={{fontWeight: "bold"}}>VAMOS NOS CASAR</h2>
                        <span>21.10.23</span>
                    </div>
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