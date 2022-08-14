import { Link, useParams } from "react-router-dom";

export default function Product() {
    let params = useParams();
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About</Link> |{" "}
                <Link to="/dashboard">Dashboard</Link> |{" "}
                <Link to="/:laptop/:25">product</Link> |{" "}
                <Link to="/login">Login</Link> |{" "}
                <Link to="/404">Nopage</Link>
            </nav>
            <h1>Product name {params.product}</h1>
            <h1>Product id {params.id}</h1>
        </div>
    );
}

