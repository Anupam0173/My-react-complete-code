import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Nopage from './components/Nopage'
import Product from './components/Product'
import Login from './components/Login'
import { Navigate } from "react-router-dom";

function App() {  
	let is_LoggedIn = false
	let data = {
		"message":"User not logged in"
	}
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/about/" element={<About />} />
				<Route path="/:product/:id" element={<Product />} />
				<Route path="/:404" element={<Nopage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={ is_LoggedIn ? <Dashboard /> : <Navigate to="/login" replace={true} state={data} />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App

