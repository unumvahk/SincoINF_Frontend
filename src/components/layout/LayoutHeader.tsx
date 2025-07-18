import { AppBar, Link, Toolbar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AvatarMenu from './AvatarMenu';

const LayoutHeader = () => {
  return (
    <AppBar position="sticky" sx={{ height: '65px', boxShadow: 'none' }}>
      <Toolbar
        sx={{
          height: '100%',
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          component={RouterLink}
          to='/equipos'
          sx={{
            display: 'flex',
            alignItems: 'center',
            ml: 2,
            position: 'relative'
          }}
        >
          <img src="/img/logo-blanco-erp.png" alt="Logo" width='150px'/>
        </Link>

        <AvatarMenu />
      </Toolbar>
    </AppBar>
  )
}

export default LayoutHeader
