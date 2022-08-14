import React from 'react'
import Compon1 from './components/Components1'
export const UserContext = React.createContext();

function App() {  	
	return (
		<UserContext.Provider value="Reed">
		  <Compon1 />
		</UserContext.Provider>
	  )
}

export default App