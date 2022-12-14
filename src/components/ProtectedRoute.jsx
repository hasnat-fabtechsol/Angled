import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../auth/auth-context";

export default function ({ children }) {
    const auth = useContext(AuthContext);
  if (!auth.isLoggedIn) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};