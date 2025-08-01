import { Box } from "@mui/material";
import { SessaoDadosUsuario } from "./components/SessaoDadosUsuario";
import { SessaoPreferencias } from "./components/SessaoPreferencias";
import { SessaoExportar } from "./components/SessaoExportar";
import { SessaoDeletar } from "./components/SessaoDeletar";

export function Configuracoes() {
    return (
        <Box sx={{ padding: 4, backgroundColor: '#1a1a1a', minHeight: '100vh', color: '#fff', marginTop: "-17px", borderRadius: 2 }}>
            <h1>Configurações</h1>
            <SessaoDadosUsuario />
            <SessaoPreferencias />
            
            <Box display="flex" gap={4} flexWrap="wrap" mt={4}>
                <SessaoExportar />
                <SessaoDeletar />
            </Box>
        </Box>
    )
}