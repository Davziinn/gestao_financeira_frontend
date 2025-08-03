import { useState } from "react"
import { Button, Container, Typography } from "@mui/material"
import { DialogNovaTransacao } from "./DialogNovaTransacao"

export const Header = () => {
    const [openDialog, setOpenDialog] = useState(false)
    const [isFormValid, setIsFormValid] = useState(false)
    const [resetFormTrigger, setResetFormTrigger] = useState(0)

    const handleFormValidation = (isValid: boolean) => {
        setIsFormValid(isValid)
    }

    const handleOpenDialog = () => {
        setOpenDialog(true)
    }

    const handleCloseDialog = () => {
        setOpenDialog(false)
        setResetFormTrigger((prev) => prev + 1)
        setIsFormValid(false)
    }

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
                onClick={handleOpenDialog}
            >
                + Nova Transação
            </Button>

            <DialogNovaTransacao
                id="nova-transacao"
                open={openDialog}
                onCancel={handleCloseDialog}
                isFormValid={isFormValid}
                onValidateForm={handleFormValidation}
                resetFormTrigger={resetFormTrigger}
            />
        </Container>
    )
}
