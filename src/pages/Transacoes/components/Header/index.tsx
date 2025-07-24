import { Button, Container, Typography } from "@mui/material"

export const Header = () => {
    return (
        <Container
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "-20px"
            }}
        >
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
                Transações
            </Typography>
            <Button
                variant="contained"
                style={{
                    backgroundColor: "#4CAF50",
                    textTransform: "none",
                }}
            >
                + Nova Transação
            </Button>
        </Container>
    )
}