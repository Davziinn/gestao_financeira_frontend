import { Box } from "@mui/material";
import { HeaderCategoria } from "./components/HeaderCategoria";
import { TabelaCategoria } from "./components/TabelaCategoria";

export function Categorias() {
    return (
        <Box>
            <HeaderCategoria />
            <TabelaCategoria />
        </Box>
    )
}