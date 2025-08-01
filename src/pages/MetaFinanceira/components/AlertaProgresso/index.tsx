import { Box, Typography } from '@mui/material'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'

export function AlertaProgresso() {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={2}
      p={2}
      borderRadius={2}
      sx={{ backgroundColor: '#1f1f1f' }}
    >
      <EmojiEventsIcon sx={{ color: '#facc15' }} />
      <Typography color="#e2e8f0">
        Você está a <strong>80%</strong> de alcançar sua meta <strong>'Viagem'</strong>, Parabéns!
      </Typography>
    </Box>
  )
}
