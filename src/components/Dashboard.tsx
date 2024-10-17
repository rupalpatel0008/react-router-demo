import { Outlet, Link, useNavigate } from "react-router-dom";
import "./styles.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="Dashboard">
      <div className="dashboard-header">
        <h1>Welcome to your Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
      <Link to="/users">Users</Link>
      <br />
      <Link to="profile">Profile</Link>
      <br />
      <Link to="settings">Settings</Link>
      <Outlet />
    </div>
  );
}
