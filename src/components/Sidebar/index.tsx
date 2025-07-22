import { SidebarContainer } from "./styles";

export function Sidebar() {
    return(
        <SidebarContainer>
            <nav>
                <ul>
                    <li><a href="/">Dashboard</a></li>
                    <li><a href="/about">Transações</a></li>
                    <li><a href="/contact">Relatórios</a></li>
                    <li><a href="/profile">Categorias</a></li>
                    <li><a href="/settings">Configurações</a></li>
                </ul>
            </nav>
        </SidebarContainer>
    )
}