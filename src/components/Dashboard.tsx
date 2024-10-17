import { Outlet, Link } from "react-router-dom";
import "./styles.css";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <h1>Welcome to your Dashboard</h1>
      <Link to="/profile">Profile</Link>
      <br />
      <Link to="/settings">Settings</Link>
      <Outlet />
    </div>
  );
}
