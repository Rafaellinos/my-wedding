import {Route, Routes} from "react-router-dom";
import Home from './routes/home.component'
import ManualConvidadoComponent from "./routes/manual-convidado.component";
import ListaPresentesComponent from "./routes/lista-presentes.component";
import ConfirmacaoPresencaPage from "./routes/confirmacao-presenca.page";
import Invitation from "./routes/invitation.page";
import LocationComponent from "./routes/location.component.jsx";
import WrapperComponent from "./routes/wrapper.component";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<WrapperComponent/>}>
                <Route index element={<Home/>}/>
                <Route path="/manual-convidados" element={<ManualConvidadoComponent/>}/>
                <Route path="/lista-presentes" element={<ListaPresentesComponent/>}/>
                <Route path="/localizacao" element={<LocationComponent/>}/>
                <Route path="/confirmar-presenca" element={<ConfirmacaoPresencaPage/>}/>
                <Route path="/invite" element={<Invitation/>}/>
            </Route>
        </Routes>
    );
}

export default App;
