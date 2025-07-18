import { styled, useTheme } from '@mui/material/styles';
import type { Theme, CSSObject } from '@mui/material/styles';
import { Box, IconButton } from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import { MenuIcon } from "lucide-react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import DrawerList from "../components/layout/DrawerList";
import LayoutHeader from "../components/layout/LayoutHeader";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiDrawer-paper': {
      boxShadow: 'none',
      borderRight: 'none',
    },
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

const MainLayout = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={open}>
        <Box
          sx={{
            bgcolor: theme.palette.primary.main,
            height: '72px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: theme.spacing(0, 1),
          }}
        >
          <IconButton 
            onClick={ () => setOpen(!open) } 
            sx={{
              color: theme.palette.primary.contrastText,
              ml: '5px'
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <DrawerList open={ open } />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1}}>
        <LayoutHeader />
        <Box sx={{ width: '100%', height: '91.3vh', p: 4 }}>
          <Outlet/>
        </Box>
      </Box>
    </Box>
  );
}

export default MainLayout;