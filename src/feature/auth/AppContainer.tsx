import { CircularProgress, Container } from "@mui/material";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth"
import Layout from "../../layout/Layout";

const AppContainer = () => {
  const { usuario, isLoading } = useAuth();
  
  return (
    isLoading ? (
      <Container
        maxWidth='sm'
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CircularProgress />
      </Container>
    ) : usuario ? (
      <Layout />
    ) : (
      <Navigate
        to='/login'
        state={{
          redirectUrl: window.location.pathname,
        }}
        replace 
      />
    )
  )
}

export default AppContainer;