import { Avatar, Menu, MenuItem } from "@mui/material"
import { deepOrange } from "@mui/material/colors"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const AvatarMenu = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  }

  const handleViewProfile = () => {
    navigate('/perfil')
    setAnchorEl(null);
  }

  const handleLogout = () => {
    console.log('login out...')
    setAnchorEl(null);
  }

  return (
    <>
      <Avatar
        onClick={ handleMenu }
        
        sx={{ 
          width: '45px',
          height: '45px',
          bgcolor: deepOrange[500],
          cursor: 'pointer',
          mr: 2
        }}
      > 
        N
      </Avatar>

      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={ () => setAnchorEl(null) }
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        sx={{
          paddingTop: 0,
          ml: -2
        }}
      >
        <MenuItem 
          onClick={ handleViewProfile }
          sx={{
            display: 'flex',
            gap: 1,
          }}
        >
          <AccountCircleIcon />
          Ver perfil
        </MenuItem>
        <MenuItem 
          onClick={ handleLogout } 
          sx={{
            display: 'flex',
            gap: 1,
          }}
        >
        <LogoutIcon/>
          Cerrar sesión
        </MenuItem>
      </Menu>
    </>
  )
}

export default AvatarMenu;