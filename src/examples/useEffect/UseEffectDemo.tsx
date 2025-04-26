import { useState, useEffect } from 'react';
import { Box, Button, Typography, Paper, TextField } from '@mui/material';

export default function UseEffectDemo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        document.title = `Contador: ${count}`;
    }, [count]);

    return (
        <Box sx={{ width: '100%', maxWidth: '100%', height: '100%', mx: 'auto' }}>
            <Paper
                elevation={2}
                sx={{ pt: 4, px: 3, pb: 3, maxWidth: 500, mx: 'auto' }}
            >
                <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
                    Demo de useEffect
                </Typography>

                <Box display="flex" flexDirection="column" gap={2}>
                    <TextField
                        label="Nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                    />

                    <Button
                        type="button"
                        variant="contained"
                        onClick={() => setCount((prev) => prev + 1)}
                    >
                        Incrementar contador
                    </Button>

                    <Typography variant="body2" color="text.secondary">
                        Nombre actual: {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Contador actual: {count}
                    </Typography>

                    <Typography variant="caption" color="text.disabled">
                        (El título de la pestaña cambia con el contador)
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
}
