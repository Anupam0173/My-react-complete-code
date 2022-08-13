import React from 'react'

export default function State_lifting_up(props) {
  const name = "anupam"
  return (
    <>
        <div >State_lifting_up</div>
        <button onClick={()=>props.f1(name)}>check my name</button>
    </>
  )
}
