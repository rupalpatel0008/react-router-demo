import { Routes, Route } from "react-router-dom";
import {
  Dashboard,
  Home,
  NotFound,
  Profile,
  Settings,
  UserDetails,
  UserList,
} from "../components";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/users/:id" element={<UserDetails />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
