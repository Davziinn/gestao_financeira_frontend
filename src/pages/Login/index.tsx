import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography
} from '@mui/material'
import { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

export function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#121212',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2
      }}
    >
      <Card
        sx={{
          backgroundColor: '#1A1A1A',
          padding: 4,
          borderRadius: 4,
          width: '100%',
          maxWidth: 400,
          boxShadow: 6
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', mb: 1 }}
        >
          Finanças Pessoais
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: '#aaa', textAlign: 'center', mb: 3 }}
        >
          Acompanhe seus ganhos e controle suas contas
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            variant="outlined"
            label="Email"
            fullWidth
            InputLabelProps={{ style: { color: '#aaa' } }}
            InputProps={{
              style: { color: '#fff', backgroundColor: '#222' }
            }}
          />

          <TextField
            variant="outlined"
            label="Senha"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            InputLabelProps={{ style: { color: '#aaa' } }}
            InputProps={{
              style: { color: '#fff', backgroundColor: '#222' },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                    sx={{ color: '#aaa' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                sx={{
                  color: '#aaa',
                  '&.Mui-checked': {
                    color: '#4CAF50'
                  }
                }}
              />
            }
            label={
              <Typography sx={{ color: '#aaa', fontSize: 14 }}>
                Lembrar de mim
              </Typography>
            }
            sx={{ mt: -1 }}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#00C896',
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#00B68B'
              }
            }}
          >
            Entrar
          </Button>

          <Typography
            variant="body2"
            sx={{ color: '#aaa', textAlign: 'center', mt: 2 }}
          >
            <Link href="#" underline="hover" sx={{ color: '#aaa', mr: 1 }}>
              Esqueci minha senha
            </Link>
            |
            <Link href="/cadastro" underline="hover" sx={{ color: '#aaa', ml: 1 }}>
              Criar conta
            </Link>
          </Typography>
        </Box>
      </Card>
    </Box>
  )
}
