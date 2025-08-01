import { Box, TextField, Typography } from "@mui/material"

export function SessaoDadosUsuario() {
    return (
        <Box mt={4}>
            <Typography variant="h6" fontWeight={600} mb={2}>
                Dados do usuário
            </Typography>
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
                <TextField
                    label="Nome"
                    placeholder="Digite seu nome"
                    defaultValue="Usuário"
                    fullWidth
                    variant="outlined"
                    sx={{
                        input: { color: 'white' },
                        label: { color: '#aaa' },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: '#444' },
                            '&:hover fieldset': { borderColor: '#666' },
                        },
                        flex: 1
                    }}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    label="Email"
                    placeholder="Digite seu email"
                    defaultValue="usuario@example.com"
                    fullWidth
                    variant="outlined"
                    sx={{
                        input: { color: 'white' },
                        label: { color: '#aaa' },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: '#444' },
                            '&:hover fieldset': { borderColor: '#666' },
                        },
                        flex: 1
                    }}
                    InputLabelProps={{ shrink: true }}
                />
            </Box>
        </Box>
    )
}
