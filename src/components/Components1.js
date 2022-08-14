import React from 'react'
import { UserContext } from '../App'

export default function Compon1() {
  return (
    <UserContext.Consumer>
      {value => <h1>{value}</h1>}
    </UserContext.Consumer>
  )
}
    