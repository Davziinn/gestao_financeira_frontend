import { Box, Typography } from '@mui/material'

export function Infos() {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography sx={{ color: '#aaa', fontWeight: 500, fontSize: 16 }}>
        Saldo total
      </Typography>

      <Typography sx={{ color: '#00C896', fontWeight: 'bold', fontSize: 28 }}>
        R$ 35.600,00
      </Typography>

      <Typography sx={{ color: '#888', fontSize: 14, marginTop: 1 }}>
        este mês você gastou 15% a mais do que o anterior
      </Typography>
    </Box>
  )
}
