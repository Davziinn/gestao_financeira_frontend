import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch
} from '@mui/material'
import { useState } from 'react'

export function SessaoPreferencias() {
  const [currency, setCurrency] = useState('R$')
  const [darkMode, setDarkMode] = useState(true)

  return (
    <Box mt={4}>
      <Typography variant="h6" fontWeight={600} mb={2}>
        Preferências
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        gap={4}
      >
        <FormControl sx={{ minWidth: 160 }}>
          <InputLabel id="moeda-label" sx={{ color: '#aaa' }}>
            Moeda padrão
          </InputLabel>
          <Select
            labelId="moeda-label"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            sx={{
              color: '#fff',
              '.MuiOutlinedInput-notchedOutline': { borderColor: '#444' },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#666' },
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#666' },
              backgroundColor: '#1e1e1e'
            }}
          >
            <MenuItem value="R$">R$ - Real</MenuItem>
            <MenuItem value="$">$ - Dólar</MenuItem>
            <MenuItem value="€">€ - Euro</MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              color="success"
            />
          }
          label={darkMode ? 'Tema Escuro' : 'Tema Claro'}
          sx={{
            color: '#ccc'
          }}
        />
      </Box>
    </Box>
  )
}
