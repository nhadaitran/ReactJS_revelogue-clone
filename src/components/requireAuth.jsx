import * as React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = ({ allowedRoles, openAuth }) => {
  const auth = useSelector((state) => state.user.info);
  const location = useLocation();
  const GetLoginModal = () => {
    setTimeout(() => openAuth(true), 0);
  };

  return allowedRoles.includes(auth?.role) ? (
    <Outlet />
  ) : auth ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    GetLoginModal() || <Navigate to="/" state={{ from: location }} replace />
  );
};
export default RequireAuth;
