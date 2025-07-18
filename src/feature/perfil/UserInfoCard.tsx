import { Avatar, Box, capitalize, Card, IconButton, Typography } from "@mui/material";
import UserInfoGrid from "../../components/empleado/UserInfoGrid";
import { PencilLine } from "lucide-react";
import useAuth from "../../hooks/useAuth";
import { formatDate } from "../../hooks/useFormat";

const UserInfoCard = () => {
  const { usuario } = useAuth();
  const { 
    nombres, 
    apellidos, 
    cargo, 
    correo, 
    estado, 
    fecha_ingreso, 
    fecha_retiro, 
    hostname, 
    telefono,
    area
  } = usuario?.usuario;

  const userInfoGrid = [
    { label: 'Fecha Ingreso:', value: formatDate(fecha_ingreso) },
    { label: 'Fecha Retiro:', value: formatDate(fecha_retiro) || 'N/A' },
    { label: 'Telefono:', value: telefono },
    { label: 'Hostname:', value: hostname },
    { label: 'Estado:', value: capitalize(estado) }
  ]

  console.log(usuario)

  return (
    <Card
      variant="outlined"
      sx={{
        width: {xs: '100%', md: '700px'},
        height: 'auto',
        display: 'flex',
        position: 'relative',
        flexDirection: {xs: 'column', md: 'row'},
        gap: { xs: 2, md: 0 },
        borderRadius: 5,
        p: 3,
      }}
    >
      <Avatar 
        sx={{
          width: '150px',
          height: '150px',
          alignSelf: 'center',
        }}
      />

      <Box
        sx={{
          maxWidth: '260px',
          width: '100%',
          px: { xs: 0, md: '18px'},
          display: 'flex',
          flexDirection: 'column',
          gap: .7
        }}
      >
        <Typography variant="h5">
          { capitalize(nombres) + ' ' + capitalize(apellidos) }
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" >
          {  capitalize(area.nombre) }
        </Typography>
        <Typography variant="body1">
          { capitalize(cargo) }
        </Typography>
        <Typography variant="caption" color="primary">
          { capitalize(correo) }
        </Typography>
      </Box>

      <UserInfoGrid userInfo={userInfoGrid} />

      <IconButton
        sx={{
          width: '35px',
          height: '35px',
          color: (theme) => theme.palette.text.primary,
          position: 'absolute',
          top: 3,
          right: 3,
        }}
      >
        <PencilLine />
      </IconButton>
    </Card>
  )
}

export default UserInfoCard;