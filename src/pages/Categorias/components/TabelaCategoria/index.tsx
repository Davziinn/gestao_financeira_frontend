import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const categorias = [
  { nome: 'Salário', tipo: 'Entrada' },
  { nome: 'Aluguel', tipo: 'Saída' },
  { nome: 'Mercado', tipo: 'Saída' },
  { nome: 'Transporte', tipo: 'Saída' },
  { nome: 'Lazer', tipo: 'Entrada' },
  { nome: 'Freela', tipo: 'Entrada' }
]

export const TabelaCategoria = () => {
  return (
    <TableContainer component={Paper} sx={{ backgroundColor: '#111', borderRadius: 2, marginTop: "16px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: '#fff' }}>Categoria</TableCell>
            <TableCell sx={{ color: '#fff' }}>Tipo</TableCell>
            <TableCell sx={{ color: '#fff' }}>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categorias.map((categoria, index) => (
            <TableRow key={index}>
              <TableCell sx={{ color: '#fff' }}>{categoria.nome}</TableCell>
              <TableCell>
                <Typography
                  sx={{
                    color: categoria.tipo === 'Saída' ? '#f44336' : '#4CAF50',
                    fontWeight: 500
                  }}
                >
                  {categoria.tipo === 'Entrada' && categoria.nome === 'Lazer' ? 'Entda' : categoria.tipo}
                </Typography>
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton size="small">
                    <EditIcon sx={{ color: "#7D7E7F" }} />
                  </IconButton>
                  <IconButton size="small">
                    <DeleteIcon sx={{ color: "#7D7E7F" }} />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
