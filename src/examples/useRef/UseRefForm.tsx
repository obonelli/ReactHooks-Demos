// src/examples/useRef/UseRefForm.tsx
import { useRef, useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

export default function UseRefForm() {
    // 1️⃣ Refs para cada campo y contadores
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const rendersRef = useRef(0);
    const clicksRef = useRef(0);

    // 2️⃣ Estado para mostrar clicks en pantalla
    const [shownClicks, setShownClicks] = useState(0);

    // 3️⃣ Cada render aumentamos el contador (sin disparar otro render)
    rendersRef.current++;

    // ——— Handlers ———
    const handleCountClick = () => {
        clicksRef.current++;
    };

    const handleShowClicks = () => {
        setShownClicks(clicksRef.current);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const name = nameRef.current?.value ?? '';
        const email = emailRef.current?.value ?? '';
        const age = ageRef.current?.value ?? '';
        console.log({ name, email, age });
        alert(`Enviado:\nNombre: ${name}\nEmail: ${email}\nEdad: ${age}`);
    };

    const handleRefresh = () => {
        if (nameRef.current) nameRef.current.value = '';
        if (emailRef.current) emailRef.current.value = '';
        if (ageRef.current) ageRef.current.value = '';
        clicksRef.current = 0;
        rendersRef.current = 0;
        setShownClicks(0);
    };

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '100%',
                height: '100%',
                maxHeight: '100%',
                mx: 'auto',
            }}
        >
            <Paper
                elevation={2}
                sx={{
                    pt: 4,       // espacio extra arriba
                    px: 3,       // padding horizontal
                    pb: 3,       // padding abajo
                    maxWidth: 500,
                    mx: 'auto',
                }}
            >
                <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ mb: 3 }}   // espacio debajo del título
                >
                    Formulario con useRef
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Box display="flex" flexDirection="column" gap={2}>
                        <TextField
                            label="Nombre"
                            placeholder="Escribe tu nombre"
                            inputRef={nameRef}
                            fullWidth
                        />
                        <TextField
                            label="Email"
                            placeholder="tucorreo@ejemplo.com"
                            type="email"
                            inputRef={emailRef}
                            fullWidth
                        />
                        <TextField
                            label="Edad"
                            placeholder="Escribe tu edad"
                            type="number"
                            inputRef={ageRef}
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

                        <Box display="flex" gap={1}>
                            <Button
                                type="button"
                                variant="contained"
                                onClick={handleCountClick}
                            >
                                Contar click (sin render)
                            </Button>
                            <Button
                                type="button"
                                variant="outlined"
                                onClick={handleShowClicks}
                            >
                                Mostrar clicks
                            </Button>
                        </Box>

                        <Typography variant="body2" color="text.secondary">
                            Renders totales: {rendersRef.current}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Clicks acumulados: {shownClicks}
                        </Typography>
                    </Box>
                </form>
            </Paper>
        </Box>
    );
}
