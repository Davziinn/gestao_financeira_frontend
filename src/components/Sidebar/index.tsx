import { SidebarContainer } from "./styles"
import DashboardIcon from '@mui/icons-material/Dashboard'
import PaidIcon from '@mui/icons-material/Paid'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'
import CategoryIcon from '@mui/icons-material/Category'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export function Sidebar() {
    return (
        <SidebarContainer>
            <nav>
                <ul>
                    <li>
                        <a href="/">
                            <DashboardIcon />
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/transacoes">
                            <AccountBalanceWalletIcon />
                            <span>Transações</span>
                        </a>
                    </li>
                    <li>
                        <a href="/meta-financeira">
                            <PaidIcon />
                            <span>Meta Financeira</span>
                        </a>
                    </li>
                    <li>
                        <a href="/relatorios">
                            <LeaderboardIcon />
                            <span>Relatórios</span>
                        </a>
                    </li>
                    <li>
                        <a href="/categorias">
                            <CategoryIcon />
                            <span>Categorias</span>
                        </a>
                    </li>
                    <li>
                        <a href="/configuracoes">
                            <SettingsIcon />
                            <span>Configurações</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </SidebarContainer>
    )
}
