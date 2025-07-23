import { Box, Card } from '@mui/material'
import styled from 'styled-components'

export const TituloContainer = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
    margin-top: -16px;
`

export const CardsContainer = styled(Box)`
    display: flex;
    flex-wrap: wrapflex;
    gap: 16px;
    justify-content: space-betweenflex;
    margin-top: -19pxflex;
`

export const CardsConteudo = styled(Card)`
    flex: 1;
    min-width: 220px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    background-color: #262626;
    color: #FFFFFF;
`