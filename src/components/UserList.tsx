import { useNavigate } from "react-router-dom";
import { User } from "../types";
import Users from "../utils/users.json";
import "./styles.css";

export default function UserList() {
  const navigate = useNavigate();

  const handleUserClick = (id: Number) => {
    navigate(`/users/${id}`);
  };

  return (
    <div className="UserList">
      <h1>Users</h1>
      <div className="user-list-container">
        {Users.map((user: User) => (
          <div
            key={user.id}
            className="user-card"
            onClick={() => handleUserClick(user.id)}
            style={{ cursor: "pointer" }}
          >
            Id: {user.id}
            <br />
            Name: {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}
