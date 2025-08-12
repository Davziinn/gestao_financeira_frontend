import { SidebarContainer } from "./styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaidIcon from "@mui/icons-material/Paid";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import CategoryIcon from "@mui/icons-material/Category";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";

interface ListItemListProps {
  to: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: "8px",
  margin: "4px 8px",
  color: "#fff",
  "&.Mui-selected": {
    backgroundColor: "transparent",
    color: "#4CAF50",
    "& .MuiListItemIcon-root": {
      color: "#4CAF50",
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      color: "#4CAF50",
      "& .MuiListItemIcon-root": {
        color: "#4CAF50",
      },
    },
  },
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const ListItemLink = ({ to, label, icon, onClick }: ListItemListProps) => {
  const navigate = useNavigate();
  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: true });

  const handleClick = () => {
    onClick?.();
    navigate(to);
  };

  return (
    <CustomListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={label} />
    </CustomListItemButton>
  );
};

export function Sidebar() {
  return (
    <SidebarContainer>
      <List sx={{ padding: "8px" }}>
        <ListItemLink to="/" label="Dashboard" icon={<DashboardIcon />} />
        <ListItemLink
          to="/transacoes"
          label="Transações"
          icon={<AccountBalanceWalletIcon />}
        />
        <ListItemLink
          to="/meta-financeira"
          label="Meta Financeira"
          icon={<PaidIcon />}
        />
        <ListItemLink
          to="/relatorios"
          label="Relatórios"
          icon={<LeaderboardIcon />}
        />
        <ListItemLink
          to="/categorias"
          label="Categorias"
          icon={<CategoryIcon />}
        />
        <ListItemLink
          to="/configuracoes"
          label="Configurações"
          icon={<SettingsIcon />}
        />
      </List>
    </SidebarContainer>
  );
}
