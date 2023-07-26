import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const tokenLS: string | null = localStorage.getItem("@TOKEN");
  return tokenLS ? <Outlet /> : <Navigate to="/" />;
};
