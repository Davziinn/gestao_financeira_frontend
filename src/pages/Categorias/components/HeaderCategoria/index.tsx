import { Button, Typography } from "@mui/material";

export function HeaderCategoria() {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "-20px"
        }}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>Categorias</Typography>
            <Button variant="contained" style={{
                backgroundColor: "#4CAF50"
            }}>+ Nova categoria</Button>
        </div>
    )
}