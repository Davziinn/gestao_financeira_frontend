import { Box, Typography, LinearProgress } from '@mui/material'

type Props = {
  titulo: string
  valorAtual: number
  valorMeta: number
  prazo: string
  status: string
}

export function LinhaMeta({ titulo, valorAtual, valorMeta, prazo, status }: Props) {
  const progresso = Math.min((valorAtual / valorMeta) * 100, 100)

  const getCor = () => {
    if (status === 'Próximo') return '#22c55e'
    if (status === 'Longe') return '#ef4444'
    if (status.includes('dias')) return '#f59e0b'
    if (status === 'Alcançada') return '#22c55e'
    return '#ccc'
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns="2fr 2fr 1.5fr 1fr"
      alignItems="center"
      gap={2}
      py={1}
      px={1}
      sx={{
        '&:hover': {
          backgroundColor: '#1a1a1a',
          borderRadius: 1
        }
      }}
    >
      <Typography>{titulo}</Typography>

      <Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography sx={{ color: getCor(), fontSize: 14 }}>
            {progresso.toFixed(2)}%
          </Typography>
          <Typography sx={{ color: '#ccc', fontSize: 14 }}>
            R${valorAtual.toLocaleString()} / R${valorMeta.toLocaleString()}
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={progresso}
          sx={{
            height: 6,
            borderRadius: 5,
            mt: 0.5,
            backgroundColor: '#333',
            '& .MuiLinearProgress-bar': {
              backgroundColor: getCor()
            }
          }}
        />
      </Box>

      <Typography color="#ccc">{prazo}</Typography>

      <Typography fontWeight={600} sx={{ color: getCor() }}>
        {status}
      </Typography>
    </Box>
  )
}
