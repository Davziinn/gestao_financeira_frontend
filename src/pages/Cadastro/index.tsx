import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Link
} from '@mui/material'
import { useState } from 'react'

export function Cadastro() {
  const [aceitouTermos, setAceitouTermos] = useState(false)

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
          backgroundColor: '#262626',
          padding: 4,
          borderRadius: 3,
          width: '100%',
          maxWidth: 420,
          boxShadow: 5
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: '#FFFFFF',
            textAlign: 'center',
            marginBottom: 2,
            fontWeight: 'bold'
          }}
        >
          Cadastro de Usuário
        </Typography>

        <Typography sx={{ color: '#ccc', fontSize: 14, mb: 2 }}>
          Preencha os campos abaixo para criar sua conta:
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            variant="outlined"
            label="Nome"
            fullWidth
            InputLabelProps={{ style: { color: '#aaa' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            variant="outlined"
            label="Username"
            fullWidth
            InputLabelProps={{ style: { color: '#aaa' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            fullWidth
            InputLabelProps={{ style: { color: '#aaa' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            variant="outlined"
            label="Confirme seu email"
            type="email"
            fullWidth
            InputLabelProps={{ style: { color: '#aaa' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            variant="outlined"
            label="Senha"
            type="password"
            fullWidth
            InputLabelProps={{ style: { color: '#aaa' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            variant="outlined"
            label="Confirme sua senha"
            type="password"
            fullWidth
            InputLabelProps={{ style: { color: '#aaa' } }}
            InputProps={{ style: { color: '#fff' } }}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={aceitouTermos}
                onChange={(e) => setAceitouTermos(e.target.checked)}
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
                Concordo com os{' '}
                <Link href="#" underline="hover" sx={{ color: '#4CAF50' }}>
                  termos de uso
                </Link>{' '}
                e políticas de privacidade
              </Typography>
            }
          />

          <Button
            variant="contained"
            disabled={!aceitouTermos}
            fullWidth
            sx={{
              marginTop: 2,
              textTransform: 'none',
              backgroundColor: '#45a049',
              '&:hover': { backgroundColor: '#4CAF50' }
            }}
          >
            Cadastrar
          </Button>

          <Typography sx={{ color: '#aaa', textAlign: 'center', mt: 2, fontSize: 14 }}>
            Já tem uma conta?{' '}
            <Link href="/login" underline="hover" sx={{ color: '#4CAF50' }}>
              Faça login
            </Link>
          </Typography>
        </Box>
      </Card>
    </Box>
  )
}
