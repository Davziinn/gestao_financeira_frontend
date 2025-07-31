import { Box } from "@mui/material"
import { HeaderRelatorios } from "./components/HeaderRelatorios"
import { Infos } from "./components/Infos"
import { EntradasSaidas } from "./components/Graficos/components/EntradaSaida"
import { EvolucaoSaldo } from "./components/Graficos/components/EvolucaoSaldo"


export function Relatorios() {
  return (
    <Box>
      <HeaderRelatorios />
      <Infos />

      <Box sx={{ display: 'flex', gap: 2, px: 2 }}>
        <Box sx={{ flex: 1, bgcolor: '#111', borderRadius: 2 }}>
          <EntradasSaidas />
        </Box>
        <Box sx={{ flex: 1, bgcolor: '#111', borderRadius: 2 }}>
          <EvolucaoSaldo />
        </Box>
      </Box>
    </Box>
  )
}
