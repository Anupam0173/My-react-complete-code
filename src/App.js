import React, { useEffect } from 'react'
import {incNumber, decNumber} from '../src/actions/index'
import { useSelector, useDispatch } from "react-redux";

function App() {  
	
	const changeTheNumber = useSelector(state => state.ChangeNumber);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log('num, ----' , changeTheNumber)
	}, [changeTheNumber])

	return (
		<>
			<h1>Increment and Decrement Counter</h1>
			<h1>Using Redux</h1>
			<button className="btn btn-primary" onClick={()=> dispatch(incNumber(8))}>+</button>
				<h1>{changeTheNumber}</h1>		
			<button className="btn btn-primary" onClick={()=> dispatch(decNumber())}>-</button>
		</>

	)
}

export default App

