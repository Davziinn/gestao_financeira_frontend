import { Card, Typography, Box } from "@mui/material"
import { green, red } from '@mui/material/colors'
import PaidIcon from '@mui/icons-material/Paid';


export function Dashboard() {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "32px",
                    marginTop: "-16px"
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Painel financeiro
                </Typography>
                <PaidIcon sx={{ fontSize: 32, color: green[500] }} />
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "16px",
                    justifyContent: "space-between",
                    marginTop: "-19px",
                }}
            >
                {/* Saldo atual */}
                <Card
                    sx={{
                        flex: 1,
                        minWidth: "220px",
                        padding: "24px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        borderRadius: "12px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        backgroundColor: "#262626",
                        color: "#FFFFFF",
                    }}
                >
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
                </Card>

                {/* Saídas */}
                <Card
                    sx={{
                        flex: 1,
                        minWidth: "220px",
                        padding: "24px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        borderRadius: "12px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        backgroundColor: "#262626",
                        color: "#FFFFFF",
                    }}
                >
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
                </Card>

                {/* Entradas */}
                <Card
                    sx={{
                        flex: 1,
                        minWidth: "220px",
                        padding: "24px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        borderRadius: "12px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        backgroundColor: "#262626",
                        color: "#FFFFFF",
                    }}
                >
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
                </Card>

                {/* Saldo dia */}
                <Card
                    sx={{
                        flex: 1,
                        minWidth: "220px",
                        padding: "24px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        borderRadius: "12px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        backgroundColor: "#262626",
                        color: "#FFFFFF",
                    }}
                >
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
                </Card>
            </Box>
        </>
    )
}
