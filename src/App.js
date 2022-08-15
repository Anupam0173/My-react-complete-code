import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About'
import Home from './components/Home'
import Nopage from './components/Nopage'
import Product from './components/Product'
import Product_Detail from './components/Product_Detail'

function App() {  
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}>
				<Route index element={<Product />} />
				<Route path="about" element={<About />} />
					<Route path="product" element={<Product />} >
						<Route path=":product_cat/:id" element={<Product_Detail />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App

