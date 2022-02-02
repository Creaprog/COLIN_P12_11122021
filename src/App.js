import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

//TODO : Faire la page 404
function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/user/:id" element={<Home />} />
			<Route path="*" element={<Home />} />
		</Routes>
	);
}

export default App;
