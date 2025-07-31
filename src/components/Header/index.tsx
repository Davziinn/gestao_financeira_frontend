import { Box, Button } from "@mui/material"
import { HeaderContainer, HeaderTextGroup, HeaderSubtitle, HeaderTitle } from "./styles"
import NotificationsIcon from '@mui/icons-material/Notifications'


export function Header() {
    return (
        <HeaderContainer>
            <HeaderTextGroup>
                <HeaderTitle>Seja bem vindo(a), Davi!</HeaderTitle>
                <HeaderSubtitle>O que deseja fazer hoje?</HeaderSubtitle>
            </HeaderTextGroup>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    marginLeft: 'auto'
                }}
            >
                <NotificationsIcon />
                <Button variant="contained" color="error">SAIR</Button>
            </Box>
        </HeaderContainer>
    )
}
