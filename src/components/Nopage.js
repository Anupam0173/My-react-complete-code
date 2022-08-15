import React from 'react'
import { Link } from "react-router-dom";


function Nopage() {
  return (
    <>
        <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/product">product</Link> |{" "}
            <Link to="/product/:laptop/:25">Product Detail</Link> |{" "}
            <Link to="/404">Nopage</Link>
        </nav>
        <div>Nopage</div>
    </>

  )
}

export default Nopage