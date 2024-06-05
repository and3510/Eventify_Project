import React, { useState } from "react"

import AppRoutes from "./Routes.jsx"
import { listIcons } from "@iconify/react/dist/iconify.js";


export default function App() {

	/* const [name, setName] = useState("");
	const [events, setEvents] = useState(["Pokemon GO", "Campus Party", "Festa AABB"]);

	const [showNotification, setShowNotification] = useState(false);


	const handleSubmit = (event) => {
		event.preventDefault();
		setEvents( currentEvents => [...currentEvents, name])
		setName('');
	}

	const handleDelete = (deletingEvents) => {
		const newEvents = events.filter((events) => events !== deletingEvents);
		setEvents(newEvents);

	}

	const toggleNotification = ()  => {
		setShowNotification(!showNotification);
	}

	return (
		<div>
		<h1>ola</h1>

		{ showNotification ? <div className="notification"> Cadastro Realizado </div> : '' }

		<button onClick={() => toggleNotification()} >Toggle Notification</button>

		<form onSubmit={handleSubmit} >
			<div>qual é o evento?</div>
			<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			<input type="submit"  onClick={() => toggleNotification()} />
		</form>
		<ul> {
			events.map((events,index) => <li key={index}>{events} <button onClick={() => handleDelete(events)}>Delete</button></li>)	
		}
		</ul>

		</div>

	)
	*/
  
	return <AppRoutes />
}