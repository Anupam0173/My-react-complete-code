import React from 'react'
import State_lifting_up from './State_lifting_up'
function Compon1() {
  

  function agh(name)
  {
    alert(name)
  }
  return (
    <>
      <div>components1</div>
      <State_lifting_up f1={agh} />
    </>
  )
}

export default Compon1;
    