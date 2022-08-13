import React, {Fragment, useRef} from 'react';

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
	<label>
	Click on the action button to
	focus and populate the text.
	</label><br/>
	<textarea ref={focusPoint} />
	</Fragment>
);
};

export default App;
