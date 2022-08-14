import React from 'react'
import { UserContext } from '../App'
export default function Compon1() {
  const value = React.useContext(UserContext);  
  return (
      <h1>Value is = {value}</h1>
  )
}
    