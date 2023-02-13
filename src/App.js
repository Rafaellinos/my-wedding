import {Routes, Route} from "react-router-dom";
import Home from './routes/home.component'
import Header from "./routes/header.component";
import ManualConvidadoComponent from "./routes/manual-convidado.component";
import ListaPresentesComponent from "./routes/lista-presentes.component";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Header/>}>
                <Route index element={<Home/>}/>
                <Route path="/manual-convidados" element={<ManualConvidadoComponent/>}/>
                <Route path="/lista-presentes" element={<ListaPresentesComponent/>}/>
            </Route>
        </Routes>
    );
}

export default App;
