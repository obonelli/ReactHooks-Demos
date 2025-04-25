import { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

export default function UseStateForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [clicks, setClicks] = useState(0);
    const [submited, setSubmited] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmited(true);
    };

    const handleRefresh = () => {
        setName('');
        setEmail('');
        setAge('');
        setClicks(0);
        setSubmited(false);
    };

    const handleCountClick = () => {
        setClicks(prev => prev + 1);
    };

    return (
        <Box sx={{ width: '100%', maxWidth: '100%', height: '100%', mx: 'auto' }}>
            <Paper
                elevation={2}
                sx={{ pt: 4, px: 3, pb: 3, maxWidth: 500, mx: 'auto' }}
            >
                <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
                    Formulario con useState
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Box display="flex" flexDirection="column" gap={2}>
                        <TextField
                            label="Nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Edad"
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            fullWidth
                        />

                        <Box display="flex" gap={1}>
                            <Button type="submit" variant="contained">
                                Enviar
                            </Button>
                            <Button type="button" variant="outlined" onClick={handleRefresh}>
                                Refrescar
                            </Button>
                        </Box>

                        <Button
                            type="button"
                            variant="contained"
                            onClick={handleCountClick}
                        >
                            Contar click
                        </Button>

                        <Typography variant="body2" color="text.secondary">
                            Clicks acumulados: {clicks}
                        </Typography>

                        {submited && (
                            <Typography variant="body2" color="primary">
                                Enviado: {name} | {email} | {age}
                            </Typography>
                        )}
                    </Box>
                </form>
            </Paper>
        </Box>
    );
}
