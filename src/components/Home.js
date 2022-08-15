import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/product">product</Link> |{" "}
        <Link to="/product/:laptop/:25">Product Detail</Link> |{" "}
        <Link to="/404">Nopage</Link>
      </nav>
      <h1>Home</h1>
      <Outlet />
    </div>
  );
}

