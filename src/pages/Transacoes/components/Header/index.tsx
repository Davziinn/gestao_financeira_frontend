import { useState } from "react"
import { Button, Container, Typography } from "@mui/material"
import { DialogNovaTransacao } from "./DialogNovaTransacao"
import { useTransacaoContext } from "../../../../hooks/useTransacaoContext"

export const Header = () => {
    const [openDialog, setOpenDialog] = useState(false)
    const [isFormValid, setIsFormValid] = useState(false)
    const [resetFormTrigger, setResetFormTrigger] = useState(0)

    const [descricao, setDescricao] = useState('')
    const [categoria, setCategoria] = useState('')
    const [tipo, setTipo] = useState('')
    const [valor, setValor] = useState('')
    const [data, setData] = useState('')

    const { adicionarTransacao } = useTransacaoContext()

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

    const handleAddTransaction = () => {
        const novaTransacao = {
            data,
            descricao,
            categoria,
            valor,
            tipo,
            entrada: tipo === 'entrada'
        }
        
        console.log(novaTransacao)
        adicionarTransacao(novaTransacao)
        handleCloseDialog()
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
                onConfirm={handleAddTransaction}
                onCancel={handleCloseDialog}
                isFormValid={isFormValid}
                onValidateForm={handleFormValidation}
                resetFormTrigger={resetFormTrigger}
                data={data}
                setData={setData}
                descricao={descricao}
                setDescricao={setDescricao}
                categoria={categoria}
                setCategoria={setCategoria}
                tipo={tipo}
                setTipo={setTipo}
                valor={valor}
                setValor={setValor}
            />
        </Container>
    )
}
