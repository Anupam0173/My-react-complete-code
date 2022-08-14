import React from 'react'
import { Link } from "react-router-dom";

function About() {
  return (
    <>
        <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/dashboard">Dashboard</Link> |{" "}
            <Link to="/404">Nopage</Link>
        </nav>
        <div>About</div>
    </>
  )
}

export default About