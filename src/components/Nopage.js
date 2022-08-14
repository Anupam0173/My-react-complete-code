import React from 'react'
import { Link } from "react-router-dom";


function Nopage() {
  return (
    <>
        <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/dashboard">Dashboard</Link> |{" "}
            <Link to="/:pen/:55">product</Link> |{" "}
            <Link to="/404">Nopage</Link>
        </nav>
        <div>Nopage</div>
    </>

  )
}

export default Nopage