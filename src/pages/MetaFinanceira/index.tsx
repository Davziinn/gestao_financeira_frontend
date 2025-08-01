import { Box, Typography, Button } from "@mui/material";
import { AlertaProgresso } from "./components/AlertaProgresso";
import { TabelaMetas } from "./components/TabelaMetas";

export function MetaFinanceira() {
    return (
        <Box p={4} sx={{ backgroundColor: '#0e0e0e', minHeight: '100vh', color: '#fff' }}>
            <AlertaProgresso />
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={4} mb={2}>
                <Typography variant="h5" fontWeight={600}>Metas</Typography>
                <Button variant="contained" sx={{ backgroundColor: '#00c776', textTransform: 'none' }}>
                    + Nova meta
                </Button>
            </Box>
            <TabelaMetas />
        </Box>
    )
}