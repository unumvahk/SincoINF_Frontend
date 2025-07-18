import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Code, Laptop, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

type DraweItemIconProp = { text: string }

const DraweItemIcon = ({ text }: DraweItemIconProp) => (
  text === 'Equipos' ? <Laptop/> :
  text === 'Licencias' ? <Code /> :
  text === 'Usuarios' && <Users />
)

interface DrawerListProps {
  open: boolean
}

const DrawerList = ({ open }: DrawerListProps) => {

  return (
    <List 
      sx={{ 
        height: '100%', 
        borderRight: 2 ,
        borderRightColor: (theme) => theme.palette.grey[300],
      }}
    >
      {
        ['Equipos', 'Licencias', 'Usuarios'].map((text) => (
          <ListItem component={Link} to={`/${text.toLowerCase()}`}  key={text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  color: (theme) => theme.palette.text.primary,
                  '&:hover': {
                    bgcolor: (theme) => theme.palette.primary.main,
                    color: (theme) => theme.palette.primary.contrastText,
                  }
                },
                open ? { justifyContent: 'initial' } : { justifyContent: 'center' },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                    color: (theme) => theme.palette.text.primary,
                    '.MuiListItemButton-root:hover &': {
                      color: (theme) => theme.palette.primary.contrastText,
                    }
                  },
                  open ? { mr: 3 } : { mr: 'auto' },
                ]}
              >
                <DraweItemIcon text={text} />
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))
      }
    </List>
  )
}

export default DrawerList
