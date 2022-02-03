import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import NoMatch from './pages/error/NoMatch';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/user/:id" element={<Home />} />
			<Route path="*" element={<NoMatch />} />
		</Routes>
	);
}

export default App;
