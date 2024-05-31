// src/Routes.jsx
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"


import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Eventsign from "./pages/Eventsign";


export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/cadastro" element={<Cadastro />} />
				<Route path="/eventsign" element={<Eventsign />} />

			</Routes>
		</BrowserRouter>
	)
}