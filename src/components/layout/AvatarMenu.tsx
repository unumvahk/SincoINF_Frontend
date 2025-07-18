import { Avatar, Menu, MenuItem } from "@mui/material"
import { deepOrange } from "@mui/material/colors"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../lib/api";

const AvatarMenu = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleViewPerfil = () => {
    navigate('/perfil'); 
    setAnchorEl(null) ;
  }

  const { mutate: signOut } = useMutation({
    mutationFn: logout,
    onSettled: () => {
      queryClient.clear();
      setAnchorEl(null);
      navigate('/login', { replace: true });
    }
  })

  return (
    <>
      <Avatar
        onClick={ (e) => setAnchorEl(e.currentTarget) }
        sx={{ 
          width: '45px',
          height: '45px',
          bgcolor: deepOrange[500],
          cursor: 'pointer',
          mr: 2
        }}
      > 
        JW
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
        <MenuItem onClick={ handleViewPerfil } sx={{ display: 'flex', gap: 1 }}>
          <AccountCircleIcon /> Ver perfil
        </MenuItem>

        <MenuItem onClick={ () => signOut() } sx={{ display: 'flex', gap: 1 }}>
          <LogoutIcon/> Cerrar sesión
        </MenuItem>
      </Menu>
    </>
  )
}

export default AvatarMenu;