import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
    let navigate = useNavigate()
    let data={"message":"logout successfully"}
    return (
        <>
            
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About</Link> |{" "}
                <Link to="/dashboard">Dashboard</Link> |{" "}
                <Link to="/:laptop/:25">product</Link> |{" "}
                <Link to="/login">Login</Link> |{" "}
                <Link to="/404">Nopage</Link>
            </nav>
            <div>Dashboard</div>
            <button type="button" onClick={()=>{navigate("/login", {state:data})}}>logout button</button>
        </>
    )
}

export default Dashboard