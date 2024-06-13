import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import EventSubscribe from "./pages/EventSubscribe";
import Eventcreate from "./pages/Eventcreate";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/subscribe" element={<EventSubscribe />} />
        <Route path="/eventcreate" element={<Eventcreate />} />

      </Routes>
    </BrowserRouter>
  );
}
