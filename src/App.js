import React, {useEffect, useState} from 'react'
import List_todo from './components/List_todo'

function App() {  
	const [text, setText] = useState('');
	const [textArray, setTextArray] = useState([]);
	
	const handleEnteredtext = (e)=>{
		setText(e.target.value);
	}

	const addtext = ()=>{
		const all_todo = [...textArray, text]
		setTextArray(all_todo)
		console.log("==========>",all_todo)
		setText('')
	}

	const handleDeletetext = (id)=>{
		console.log("**********************Deletetext******************************");
		textArray.splice(id,1)
		setTextArray(textArray)
		
	}


	return (
		<>
			<h1>My Todo:</h1>
			<input type="text" value={text} onChange={(e)=>{handleEnteredtext(e)}}/>
			{/* if i will call below funcation then why i am getting screen loaded. */}
			<button onClick={addtext} >Add</button>

			<div>
				{
				textArray.map((value, i) => {
					return <List_todo key={i} id={i} value={value} deleteText={(id) => {handleDeletetext(id)}}></List_todo>
					})
				}
			</div>

		</>

	)
}

export default App