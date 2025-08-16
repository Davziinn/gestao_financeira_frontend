import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material"

export function Filtros() {
    return (
        <Box display="flex" gap={3} marginY={2}>
            <FormControl fullWidth size="small">
                <InputLabel sx={{ color: "white" }}>Período</InputLabel>
                <Select
                    size="small"
                    value="mesAtual"
                    label="Período"
                    sx={{
                        backgroundColor: "#262626",
                        color: "white",
                        ".MuiOutlinedInput-notchedOutline": {
                            borderColor: "white"
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#4CAF50"
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#4CAF50"
                        },
                        ".MuiSvgIcon-root": {
                            color: "white"
                        },
                        ".MuiSelect-select": {
                            paddingTop: "6px",
                            paddingBottom: "6px"
                        }
                    }}
                >
                    <MenuItem value="mesAtual">Mês atual</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth size="small">
                <InputLabel sx={{ color: "white" }}>Categoria</InputLabel>
                <Select
                    size="small"
                    value="todas"
                    label="Categoria"
                    sx={{
                        backgroundColor: "#262626",
                        color: "white",
                        ".MuiOutlinedInput-notchedOutline": {
                            borderColor: "white"
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#4CAF50"
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#4CAF50"
                        },
                        ".MuiSvgIcon-root": {
                            color: "white"
                        },
                        ".MuiSelect-select": {
                            paddingTop: "6px",
                            paddingBottom: "6px"
                        }
                    }}
                >
                    <MenuItem value="todas">Todas as categorias</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth size="small">
                <InputLabel sx={{ color: "white" }}>Tipo</InputLabel>
                <Select
                    size="small"
                    value="entradaSaida"
                    label="Tipo"
                    sx={{
                        backgroundColor: "#262626",
                        color: "white",
                        ".MuiOutlinedInput-notchedOutline": {
                            borderColor: "white"
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#4CAF50"
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#4CAF50"
                        },
                        ".MuiSvgIcon-root": {
                            color: "white"
                        },
                        ".MuiSelect-select": {
                            paddingTop: "6px",
                            paddingBottom: "6px"
                        }
                    }}
                >
                    <MenuItem value="entradaSaida">Entrada e saída</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}
