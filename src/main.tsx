import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import App from './App';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#1976d2' },          // azul MUI por defecto
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>
);
