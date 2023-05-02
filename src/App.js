import {Routes, Route} from "react-router-dom";
import Home from './routes/home.component'
import Header from "./routes/header.component";
import ManualConvidadoComponent from "./routes/manual-convidado.component";
import ListaPresentesComponent from "./routes/lista-presentes.component";
// import SobreNosPage from "./routes/sobre-nos.page";
import ConfirmacaoPresencaPage from "./routes/confirmacao-presenca.page";
import Invitation from "./routes/invitation.page";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Header/>}>
                <Route index element={<Home/>}/>
                <Route path="/manual-convidados" element={<ManualConvidadoComponent/>}/>
                <Route path="/lista-presentes" element={<ListaPresentesComponent/>}/>
                {/*<Route path="/sobre-nos" element={<SobreNosPage/>}/>*/}
                <Route path="/confirmar-presenca" element={<ConfirmacaoPresencaPage/>}/>
                <Route path="/invite" element={<Invitation/>}/>
            </Route>
        </Routes>
    );
}

export default App;
