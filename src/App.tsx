import { BrowserRouter, Link } from "react-router-dom";
import Routes from "./routes/routes";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">User List</Link>
              </li>
            </ul>
          </nav>
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}
