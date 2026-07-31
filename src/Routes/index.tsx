import { BrowserRouter, Route, Routes } from "react-router-dom";  
import Autenticacao from "../Pages/Autenticacao";

const RoutersApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Autenticacao />} />    
            </Routes> 
        </BrowserRouter>
    );
};

export default RoutersApp;