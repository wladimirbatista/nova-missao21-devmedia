import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Home from "../pages/Home";

const Rotas = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas;