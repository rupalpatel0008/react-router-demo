import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Home() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="Home">
      <h1>Welcome to the User Management Dashboard</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
