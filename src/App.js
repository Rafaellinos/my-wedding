import {Route, Routes} from "react-router-dom";
import Home from './routes/home.component'
import WrapperComponent from "./routes/wrapper.component";
import InvitationNormal from "./routes/invitation-normal.page";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<WrapperComponent/>}>
                <Route index element={<Home/>}/>
                {/*<Route path="/manual-convidados" element={<ManualConvidadoComponent/>}/>*/}
                {/*<Route path="/lista-presentes" element={<ListaPresentesComponent/>}/>*/}
                {/*<Route path="/localizacao" element={<LocationComponent/>}/>*/}
                {/*<Route path="/confirmar-presenca" element={<ConfirmacaoPresencaPage/>}/>*/}
                {/*<Route path="/invite" element={<Invitation/>}/>*/}
            </Route>
            <Route path="/virtual-invite" element={<InvitationNormal/>}/>
        </Routes>
    );
}

export default App;
