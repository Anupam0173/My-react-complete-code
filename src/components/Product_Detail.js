import { Link, useParams } from "react-router-dom";

export default function Product_Detail() {
    let params = useParams();
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About</Link> |{" "}
                <Link to="/product">product</Link> |{" "}
                <Link to="/product/:laptop/:25">Product Detail</Link> |{" "}
                <Link to="/404">Nopage</Link>
            </nav>
            <h1>Product Details</h1>
            <h1>Product name {params.product_cat}</h1>
            <h1>Product id {params.id}</h1>
        </div>
    );
}

