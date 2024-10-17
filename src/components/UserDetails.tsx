import { useParams } from "react-router-dom";
import { getUser } from "../utils/util";
import "./styles.css";

export default function UserDetails() {
  const { id } = useParams();
  const user = getUser(id);
  return (
    <div className="UserDetails">
      <h1>User Details for the User Id {id}</h1>

      {user && (
        <div key={user.id} className="user-card" style={{ cursor: "pointer" }}>
          Id: {user.id}
          <br />
          Name: {user.name}
          <br />
          Mobile No: {user.mobile_no}
          <br />
          City: {user.city}
        </div>
      )}
    </div>
  );
}
