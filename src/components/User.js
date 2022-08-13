import React,{forwardRef} from 'react'

function User(props, fref) {
  return (
    <div>
        <input type="text" ref={fref}></input>
    </div>
  )
}

export default forwardRef(User)