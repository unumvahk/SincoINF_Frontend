import { AppBar, Box, Link } from "@mui/material";
import { Outlet, Link as RouterLink } from "react-router-dom";


const AuthLayout = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ height: '60px', pl: 4 }}>
          <Link
            component={RouterLink}
            to='/login'
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              ml: 2
            }}
          >
            <img src="/img/logo-blanco-erp.png" alt="Logo" width='110px'/>
          </Link>
        </AppBar>
      </Box>
      <Outlet/>
    </>
  )
}

export default AuthLayout
