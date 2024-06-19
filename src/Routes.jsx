import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import EventSubscribe from "./pages/EventSubscribe";
import Eventcreate from "./pages/Eventcreate";
import Eventabout from "./pages/Eventabout";
import Myevents from "./pages/Myevents";
import Eventmanager from "./pages/Eventmanager"
import SeeEventabout from "./pages/SeeEventabout";
import Notification from "./pages/Notification";



export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/subscribe" element={<EventSubscribe />} />
        <Route path="/eventcreate" element={<Eventcreate />} />
        <Route path="/eventabout" element={<Eventabout />} />
        <Route path="/myevents" element={<Myevents />} />
        <Route path="/eventmanager" element={<Eventmanager />} />
        <Route path="/seeeventabout" element={<SeeEventabout />} />
        <Route path="/notification" element={<Notification />} />
        


      </Routes>
    </BrowserRouter>
  );
}
