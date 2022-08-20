import React from 'react'

function List_todo(props) {
    console.log("props:::", props)
  return (
    <>
        <div>
            <h1>{ props.value }</h1>
            <button onClick={()=>{props.deleteText(props.id)}}>Delete</button>
        </div>
    </>
  )
}

export default List_todo