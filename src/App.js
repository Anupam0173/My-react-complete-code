import React, {Fragment, useRef} from 'react';
import User from './components/User';
function App() {

// Creating a ref object using useRef hook
const focusPoint = useRef(null);
const onClickHandler = () => {
	focusPoint.current.value =
	"The quick brown fox jumps over the lazy dog";
	focusPoint.current.focus();
  focusPoint.current.style.color = "red";
};
return (
	<Fragment>
	<div>
		<button onClick={onClickHandler}>
		ACTION
		</button>
	</div>
  <User ref = {focusPoint}></User>
	</Fragment>
);
};

export default App;
