import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AuthLayout from "../../layout/AuthLayout";

const IsAuthenticated = () => {
  const { usuario } = useAuth();

  return usuario ? <Navigate to={'/equipos/'} replace /> : <AuthLayout />
};

export default IsAuthenticated;
