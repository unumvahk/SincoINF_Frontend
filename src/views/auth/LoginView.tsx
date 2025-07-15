import { Box } from "@mui/material";
import LoginForm from "../../feature/auth/LoginForm";
// import LoginForm from "../../feature/auth/login/LoginForm";

const LoginView = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '92vh',
        display: 'flex',
      }}
    >
      <Box
        flex={1}
        sx={{
          display:'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#e6f0fa;'
        }}
      >
        <img src="/img/logo.png" alt="Logo" width='60%' />
      </Box>

      <Box
        flex={1}
        sx={{
          display:'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <LoginForm />
      </Box>
    </Box>
  )
}

export default LoginView;