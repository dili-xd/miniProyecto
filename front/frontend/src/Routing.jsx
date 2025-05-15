import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import App from "./App";
import Producto from "./Producto";

function Routing(){
    return(
    <Router>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/productos" element={<Producto/>}/>
        </Routes>
    </Router>
    )

}
export default Routing