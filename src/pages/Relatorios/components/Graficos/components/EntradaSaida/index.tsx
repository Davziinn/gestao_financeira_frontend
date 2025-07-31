import { Box, Typography } from '@mui/material'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts'

const data = [
  { mes: 'Jan', entrada: 12, saida: 6 },
  { mes: 'Mar', entrada: 7, saida: 3 },
  { mes: 'Abr', entrada: 17, saida: 4 },
  { mes: 'Jun', entrada: 23, saida: 8 }
]

export function EntradasSaidas() {
  return (
    <Box sx={{ width: '100%', height: 300, p: 2 }}>
      <Typography sx={{ color: '#fff', mb: 1 }}>Entradas vs saídas por mês</Typography>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="mes" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Legend wrapperStyle={{ color: '#fff' }} />
          <Bar dataKey="entrada" fill="#00C896" name="Entradas" />
          <Bar dataKey="saida" fill="#00C89680" name="Saídas" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  )
}
