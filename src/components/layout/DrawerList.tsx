import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Code, Laptop, Users } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

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
  const location = useLocation();

  return (
    <List 
      sx={{ 
        height: '100%', 
        borderRight: 2 ,
        borderRightColor: (theme) => theme.palette.grey[300],
        paddingTop: 0,
      }}
    >
      {
        ['Equipos', 'Licencias', 'Usuarios'].map((text) => {
          const path = `/${text.toLocaleLowerCase()}`;
          const isActive = location.pathname.startsWith(path);

          return (
            <ListItem 
              component={Link} 
              to={path}  
              key={text} 
              disablePadding 
              sx={{ 
                p: 0.6 
              }}
            >
              <ListItemButton
                sx={[
                  {
                    py: 0,
                    minHeight: 40,
                    borderRadius: 2,
                    color: (theme) => theme.palette.primary.dark,
                    '&:hover': (theme) => isActive
                      ? { bgcolor: theme.palette.primary.dark }
                      : { bgcolor: theme.palette.grey[300] },
                  },
                  open ? { justifyContent: 'initial' } : { justifyContent: 'center' },
                  isActive && {
                    bgcolor: (theme) => theme.palette.primary.dark,
                    color: (theme) => theme.palette.primary.contrastText,
                    '& .MuiListItemIcon-root': {
                      color: (theme) => theme.palette.primary.contrastText,
                    },
                  },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                      color: (theme) => theme.palette.primary.dark,
                    },
                    open ? { mr: 1 } : { mr: 'auto' },
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
          )
        })
      }
    </List>
  )
}

export default DrawerList