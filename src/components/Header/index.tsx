import { Button } from "@mui/material"
import { HeaderContainer, HeaderTextGroup, HeaderSubtitle, HeaderTitle } from "./styles"

export function Header() {
    return (
        <HeaderContainer>
            <HeaderTextGroup>
                <HeaderTitle>Seja bem vindo(a), Davi!</HeaderTitle>
                <HeaderSubtitle>O que deseja fazer hoje?</HeaderSubtitle>
            </HeaderTextGroup>
            <Button variant="contained" color="error">SAIR</Button>
        </HeaderContainer>
    )
}
