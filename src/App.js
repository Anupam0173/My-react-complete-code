import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Nopage from './components/Nopage'

function App() {  
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/about" element={<About />} />
				<Route path="/:404" element={<Nopage />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App

