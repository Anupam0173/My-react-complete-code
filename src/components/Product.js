import { Link, Outlet } from "react-router-dom";

export default function Product() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About</Link> |{" "}
                <Link to="/product">product</Link> |{" "}
                <Link to="/product/:laptop/:25">Product Detail</Link> |{" "}
                <Link to="/404">Nopage</Link>
            </nav>
            <h1>Product</h1>
            <Outlet></Outlet>
        </div>
    );
}

