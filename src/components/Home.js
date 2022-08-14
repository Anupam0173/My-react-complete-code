import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/404">Nopage</Link>
      </nav>
      <h1>Home</h1>
    </div>
  );
}

