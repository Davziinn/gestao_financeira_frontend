import { Box, Typography } from '@mui/material'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { mes: 'Jan', valor: 10 },
  { mes: 'Feb', valor: 15 },
  { mes: 'Mar', valor: 20 },
  { mes: 'Abr', valor: 30 },
  { mes: 'Jun', valor: 40 }
]

export function EvolucaoSaldo() {
  return (
    <Box sx={{ width: '100%', height: 300, p: 2 }}>
      <Typography sx={{ color: '#fff', mb: 1 }}>Evolução do saldo</Typography>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="mes" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Line type="monotone" dataKey="valor" stroke="#00C896" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  )
}
