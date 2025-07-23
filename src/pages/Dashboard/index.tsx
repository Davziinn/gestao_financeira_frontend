import { Typography } from "@mui/material"
import { green, red } from '@mui/material/colors'
import PaidIcon from '@mui/icons-material/Paid';
import { CardsContainer, CardsConteudo, TituloContainer } from "./styles";


export function Dashboard() {
    return (
        <>
            <TituloContainer>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Painel financeiro
                </Typography>
                <PaidIcon sx={{ fontSize: 32, color: green[500] }} />
            </TituloContainer>

            <CardsContainer>
                <CardsConteudo>
                    <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                        Saldo atual
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: "8px" }}>
                        R$ 1.000,00
                    </Typography>
                    <Typography sx={{ marginTop: "12px", fontSize: "0.8rem", opacity: 0.7 }}>
                        <Typography
                            component="span"
                            sx={{ color: green[600], fontWeight: "bold", marginRight: "4px", fontSize: "0.8rem" }}
                        >
                            +2%
                        </Typography>
                        em relação ao mês passado
                    </Typography>
                </CardsConteudo>

                <CardsConteudo>
                    <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                        Saídas (mês)
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: "bold", marginTop: "8px", color: red[600] }}
                    >
                        R$ 1.000,00
                    </Typography>
                    <Typography sx={{ marginTop: "12px", fontSize: "0.8rem", opacity: 0.7 }}>
                        <Typography
                            component="span"
                            sx={{ color: red[600], fontWeight: "bold", marginRight: "4px", fontSize: "0.8rem" }}
                        >
                            -1,5%
                        </Typography>
                        em relação ao mês passado
                    </Typography>
                </CardsConteudo>

                <CardsConteudo>
                    <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                        Entradas (mês)
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: "bold", marginTop: "8px", color: green[600] }}
                    >
                        R$ 1.000,00
                    </Typography>
                    <Typography sx={{ marginTop: "12px", fontSize: "0.8rem", opacity: 0.7 }}>
                        <Typography
                            component="span"
                            sx={{ color: green[600], fontWeight: "bold", marginRight: "4px", fontSize: "0.8rem" }}
                        >
                            +3,8%
                        </Typography>
                        em relação ao mês passado
                    </Typography>
                </CardsConteudo>

                <CardsConteudo>
                    <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                        Saldo (dia)
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: "8px" }}>
                        R$ 1.000,00
                    </Typography>
                    <Typography sx={{ marginTop: "12px", fontSize: "0.8rem", opacity: 0.7 }}>
                        <Typography
                            component="span"
                            sx={{ color: green[600], fontWeight: "bold", marginRight: "4px", fontSize: "0.8rem" }}
                        >
                            +0,5%
                        </Typography>
                        em relação ao mês passado
                    </Typography>
                </CardsConteudo>
            </CardsContainer>
        </>
    )
}
