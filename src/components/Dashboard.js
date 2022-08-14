import React from 'react'
import { Link } from "react-router-dom";


function Dashboard() {
  return (
    <>
        <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/dashboard">Dashboard</Link> |{" "}
            <Link to="/:laptop/:25">product</Link> |{" "}
            <Link to="/404">Nopage</Link>
        </nav>
        <div>Dashboard</div>
    </>
  )
}

export default Dashboard