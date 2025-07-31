import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material"

export function HeaderRelatorios() {
  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 2,
        gap: 2
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>Relatórios</Typography>

      <FormControl size="small" sx={{ width: 160 }}>
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
          <MenuItem value="mesAnterior">Mês anterior</MenuItem>
          <MenuItem value="ultimos3Meses">Últimos 3 meses</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
