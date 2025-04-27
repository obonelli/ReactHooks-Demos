import { useState, useMemo } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

function slowFunction(num: number) {
    console.log('Calculando número muy pesado...');
    for (let i = 0; i < 1e7; i++) { } // Simula una operación muy lenta
    return num * 2;
}

export default function UseMemoDemo() {
    const [number, setNumber] = useState(0);
    const [, setOtherState] = useState(false);

    const doubledNumber = useMemo(() => slowFunction(number), [number]);

    return (
        <Box sx={{ width: '100%', maxWidth: '100%', height: '100%', mx: 'auto' }}>
            <Paper
                elevation={2}
                sx={{ pt: 4, px: 3, pb: 3, maxWidth: 500, mx: 'auto' }}
            >
                <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
                    Demo de useMemo
                </Typography>

                <Box display="flex" flexDirection="column" gap={2}>
                    <TextField
                        label="Número"
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(Number(e.target.value))}
                        fullWidth
                    />

                    <Typography variant="body2" color="text.secondary">
                        Resultado pesado (doble): {doubledNumber}
                    </Typography>

                    <Button
                        type="button"
                        variant="contained"
                        onClick={() => setOtherState(prev => !prev)}
                    >
                        Cambiar otro estado
                    </Button>

                    <Typography variant="caption" color="text.disabled">
                        (Cambiar otro estado no recalcula el número)
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
}
