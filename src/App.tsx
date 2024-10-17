import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/routes";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}
