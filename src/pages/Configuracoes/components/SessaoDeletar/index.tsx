import { Box, Typography, Button } from "@mui/material";

export function SessaoDeletar() {
    return (
        <Box flex={1} minWidth={250} border="1px solid #333" borderRadius={2} p={2}>
            <Typography variant="h6" mb={1}>Apagar conta</Typography>
            <Typography variant="body2" color="gray" mb={2}>
                Essa ação é irreversível!
            </Typography>
            <Button variant="contained" color="error">
                Apagar minha conta
            </Button>
        </Box>
    )
}