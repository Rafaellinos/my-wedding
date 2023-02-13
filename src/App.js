import {Routes, Route} from "react-router-dom";
import Home from './routes/home.component'
import Header from "./routes/header.component";
import CountComponent from "./routes/count.component";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Header/>}>
                <Route index element={<Home/>}/>
                <Route path="/count" element={<CountComponent/>}/>
            </Route>
        </Routes>
    );
}

export default App;
