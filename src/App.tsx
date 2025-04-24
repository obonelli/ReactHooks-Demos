import { useState } from 'react';
import {
    AppBar,
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';
import { UseRefForm } from './examples/useRef';

const drawerWidth = 220;

const demos = {
    useRef: <UseRefForm />,
    // useState: <UseStateForm />,
    // useEffect: <UseEffectDemo />,
};

export default function App() {
    const [selectedDemo, setSelectedDemo] =
        useState<keyof typeof demos>('useRef');

    return (
        <Box sx={{ display: 'flex' }}>
            {/* ────────────────── TOP BAR ────────────────── */}
            <AppBar position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        React Hooks Demos
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* ────────────────── SIDE MENU ────────────────── */}
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
            >
                {/* espacio para que la lista no quede debajo del AppBar */}
                <Toolbar />
                <Divider />
                <List disablePadding>
                    {Object.keys(demos).map((hook) => (
                        <ListItem key={hook} disablePadding>
                            <ListItemButton
                                selected={selectedDemo === hook}
                                onClick={() => setSelectedDemo(hook as keyof typeof demos)}
                            >
                                <ListItemText primary={hook} sx={{ textTransform: 'capitalize' }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            {/* ────────────────── CONTENT AREA ────────────────── */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    height: '100vh',
                    p: 3,
                    pt: 10, // deja espacio al AppBar
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    overflow: 'auto',
                }}
            >
                {/* aquí se monta el demo escogido */}
                <Box sx={{
                    width: '100%', maxWidth: '100%',
                    minHeight: '100%', maxHeight: '100%'
                }}>
                    {demos[selectedDemo]}
                </Box>
            </Box>
        </Box>
    );
}
