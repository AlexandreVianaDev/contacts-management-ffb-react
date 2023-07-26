import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ProtectedRoutes } from "../pages/ProtectedRoutes";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
