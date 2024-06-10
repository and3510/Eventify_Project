// src/Routes.jsx
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"


import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Eventsign from "./pages/Eventsign";
import Eventcreate from "./pages/Eventcreate";


export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/" element={<Login />} />
				<Route path="/cadastro" element={<Cadastro />} />
				<Route path="/eventsign" element={<Eventsign />} />
				<Route path="/eventcreate" element={<Eventcreate />} />
				
			</Routes>
		</BrowserRouter>
	)
}