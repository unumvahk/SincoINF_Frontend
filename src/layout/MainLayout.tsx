import { styled } from '@mui/material/styles';
import type { Theme, CSSObject } from '@mui/material/styles';
import { Box } from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import { Outlet } from "react-router-dom";
import { useState } from "react";
import DrawerList from "../components/layout/DrawerList";
import LayoutHeader from "../components/layout/LayoutHeader";

const drawerWidth = 180;

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
      top: '65px',
      height: 'calc(100vh - 65px)',
      position: 'absolute',
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
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box sx={{ flexShrink: 0 }}>
        <LayoutHeader />
      </Box>

      <Box sx={{ display: 'flex', flexGrow: 1, minHeight: 0 }}>
        <Drawer 
          variant="permanent" 
          open={open}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <DrawerList open={ open } />
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 5, position: 'relative' }}>
          <Outlet/>
        </Box>
      </Box>
    </Box>
  );
}

export default MainLayout;