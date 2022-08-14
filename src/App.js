import React from 'react'
import Compon1 from './components/Components1'

function App() {  	
	const [data] = Compon1("https://jsonplaceholder.typicode.com/todos");

	return (
		<>
		  {data &&
			data.map((item) => {
			  return <p key={item.id}>{item.title}</p>;
			})}
		</>
	  );
}

export default App

