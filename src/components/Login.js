import React from 'react'
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
        <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/dashboard">Dashboard</Link> |{" "}
            <Link to="/:mobile/:89">product</Link> |{" "}
            <Link to="/404">Nopage</Link>
        </nav>
        <div>Login</div>
    </>
  )
}

export default Login