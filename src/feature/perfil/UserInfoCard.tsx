import { Avatar, Box, Card, IconButton, Typography } from "@mui/material"
import UserInfoGrid from "../../components/empleado/UserInfoGrid"
import { PencilLine } from "lucide-react"

const userInfo = [
  { label: "Fecha de Ingreso:", value: "May/18/2015" },
  { label: "Fecha de Retiro:", value: "-------" },
  { label: "Telefono:", value: "123456789" },
  { label: "Hostname:", value: "Juan1324C" },
  
  
  { label: "Estado:", value: "Activo" },
]

const UserInfoCard = () => {
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
          maxWidth: '420',
          width: '100%',
          px: { xs: 0, md: '18px'},
          display: 'flex',
          flexDirection: 'column',
          gap: .7
        }}
      >
        <Typography variant="h5">
          Juan David Wilches Devia
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" >
          Infraestructura
        </Typography>
        <Typography variant="body1">
          Desarrollador Junior I
        </Typography>
        <Typography variant="caption" color="primary">
          juan.wilches@sinco.com
        </Typography>
      </Box>

      <UserInfoGrid userInfo={userInfo} />

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