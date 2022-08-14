import React from 'react'
import { Link, useLocation } from "react-router-dom";

function Login() {
  let use_location = useLocation();
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
        <div>UseLocation:{use_location.state.message}</div>
    </>
  )
}

export default Login