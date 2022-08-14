import React,{ useState} from 'react'
import Compon1 from './components/Components1'
function App() {
  	// Declare a new state variable, which we'll call "count"
	const [count, setCount] = useState(0);
	const [middlevalue, setMiddleValue] = useState(500);
	
	return (
			<div>
					<p>You clicked {count} times</p>
					<button onClick={() => setCount(count + 1)}> initital increment </button>
					<button onClick={() => setMiddleValue(middlevalue + 1)}> middle increment </button>
					<Compon1 value={middlevalue}></Compon1>
			</div>
	);
}

export default App