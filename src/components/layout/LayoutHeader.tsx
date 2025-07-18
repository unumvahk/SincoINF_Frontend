import { AppBar, Link, Toolbar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AvatarMenu from './AvatarMenu';

const LayoutHeader = () => {
  return (
    <AppBar position="sticky" sx={{ height: '65px', bgcolor: 'transparent', boxShadow: 'none' }}>
      <Toolbar
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pl: 0,
          pr: 0,
          minHeight: '65px !important',
          '&.MuiToolbar-root': {
            paddingLeft: '0 !important',
            paddingRight: '0 !important',
          },
        }}
      >
        <Link
          component={RouterLink}
          to='/equipos'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            ml: 2,
            position: 'relative'
          }}
        >
          <img src="/img/logo.png" alt="Logo" width='150px'/>
        </Link>

        <AvatarMenu />
      </Toolbar>
    </AppBar>
  )
}

export default LayoutHeader
