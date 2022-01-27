import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import React from "react";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/user/12" element={<Home />} />
			<Route path="/user/18" element={<Home />} />
		</Routes>
	);
}

export default App;
