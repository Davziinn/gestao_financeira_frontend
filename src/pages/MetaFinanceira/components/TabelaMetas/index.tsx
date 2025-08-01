import { Box, Typography, Divider } from '@mui/material'
import { LinhaMeta } from './LinhaMeta'

const metasMock = [
  {
    titulo: 'Guardar R$ 5.000 até Dezembro',
    valorAtual: 3200,
    valorMeta: 5000,
    prazo: '31 de dez de 2024',
    status: 'Próximo'
  },
  {
    titulo: 'Reforma da cozinha',
    valorAtual: 4440,
    valorMeta: 10000,
    prazo: '30 de jun de 2025',
    status: 'Longe'
  },
  {
    titulo: 'Reserva de emergência',
    valorAtual: 2357,
    valorMeta: 22500,
    prazo: '10 de mai de 2024',
    status: '10 dias restantes'
  },
  {
    titulo: 'Comprar notebook novo',
    valorAtual: 6300,
    valorMeta: 6300,
    prazo: 'R$ 6.300 / $ 6.300',
    status: 'Alcançada'
  }
]

export function TabelaMetas() {
  return (
    <Box>
      <Box display="grid" gridTemplateColumns="2fr 2fr 1.5fr 1fr" mb={1} px={1}>
        <Typography color="#aaa">Meta</Typography>
        <Typography color="#aaa">Progresso</Typography>
        <Typography color="#aaa">Prazo</Typography>
        <Typography color="#aaa">Status</Typography>
      </Box>
      <Divider sx={{ borderColor: '#333', mb: 1 }} />

      {metasMock.map((meta, index) => (
        <LinhaMeta key={index} {...meta} />
      ))}
    </Box>
  )
}
